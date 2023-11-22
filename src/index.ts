import { Extension } from '@cdktf/provider-postgresql/lib/extension';
import { FunctionResource } from '@cdktf/provider-postgresql/lib/function-resource';
import { Grant } from '@cdktf/provider-postgresql/lib/grant';
import { Role } from '@cdktf/provider-postgresql/lib/role';
import { Schema } from '@cdktf/provider-postgresql/lib/schema';
import { Construct } from 'constructs';

export class DatadogMonitoring extends Construct {
  constructor(
    scope: Construct,
    id: string,
    database: string,
    password: string,
  ) {
    super(scope, id);

    const dataDogRole = new Role(this, 'role', {
      name: 'datadog',
      inherit: true,
      roles: ['pg_monitor'],
      login: true,
      password: password,
    });

    const dataDogSchema = new Schema(this, 'datadog-schema', {
      name: 'datadog',
      ifNotExists: true,
      owner: dataDogRole.name,
      database: database,
    });

    new Grant(this, 'grant-datadog-schema', {
      database: database,
      privileges: ['USAGE'],
      objectType: 'schema',
      role: dataDogRole.name,
      schema: dataDogSchema.name,
      dependsOn: [dataDogSchema],
    });

    new Grant(this, 'grant-public-schema', {
      database: database,
      privileges: ['USAGE'],
      objectType: 'schema',
      role: dataDogRole.name,
      schema: 'public',
    });

    new Extension(this, 'pg_stats-extension', {
      name: 'pg_stat_statements',
      schema: 'public',
      database: database,
    });

    new FunctionResource(this, 'datadog-explain', {
      name: 'explain_statement',
      database: database,
      schema: dataDogSchema.name,
      returns: 'SETOF JSON',
      language: 'plpgsql',
      strict: true,
      securityDefiner: true,
      arg: [
        { mode: 'IN', name: 'l_query', type: 'TEXT' },
        { mode: 'OUT', name: 'explain', type: 'JSON' },
      ],
      body: `DECLARE
curs REFCURSOR;
plan JSON;

BEGIN
    OPEN curs FOR EXECUTE pg_catalog.concat('EXPLAIN (FORMAT JSON) ', l_query);
    FETCH curs INTO plan;
    CLOSE curs;
    RETURN QUERY SELECT plan;
END;
`,
    });
  }
}

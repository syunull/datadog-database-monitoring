import { TerraformStack, Testing } from 'cdktf';
import { DatadogMonitoring } from '../src/';

Testing.setupJest();

const PASSWORD = '123456789';
const DATABASE_NAME = 'test_db';

Testing.setupJest();

describe('datadog-monitoring', () => {
  it('synths', () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, 'test-stack');

    new DatadogMonitoring(stack, 'datadog-monitoring', DATABASE_NAME, PASSWORD);
    const synthesized = Testing.synth(stack);

    expect(
      Testing.toHaveResourceWithProperties(synthesized, 'postgresql_role', {
        name: 'datadog',
        password: PASSWORD,
      }),
    ).toBe(true);

    expect(
      Testing.toHaveResourceWithProperties(synthesized, 'postgresql_grant', {
        database: DATABASE_NAME,
      }),
    ).toBe(true);

    const json_stack = JSON.parse(synthesized);
    const grants = Object.entries(json_stack.resource.postgresql_grant);
    expect(grants.length == 2).toBe(true);
  });
});

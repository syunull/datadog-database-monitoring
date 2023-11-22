import { cdktf } from 'projen';
const project = new cdktf.ConstructLibraryCdktf({
  author: 'Syunull',
  authorAddress: 'syunull@users.noreply.github.com',
  cdktfVersion: '^0.19.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.0.0',
  name: 'datadog-database-monitoring',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/syunull/datadog-database-monitoring.git',
  license: 'Apache-2.0',
});

project.addDeps('@cdktf/provider-postgresql', 'constructs');
project.addDevDeps('publib');
project.synth();

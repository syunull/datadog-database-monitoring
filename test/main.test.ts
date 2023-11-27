import { TerraformStack, Testing } from 'cdktf';
import { DatadogMonitoring } from '../src/';

Testing.setupJest();

describe('tests', () => {
  it('has role', () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, 'test-stack');

    new DatadogMonitoring(stack, 'datadog-monitoring', 'test_db', '123456789');

    const synthesized = Testing.synth(stack);
    Testing.toHaveResource(synthesized, 'role');
  });
});

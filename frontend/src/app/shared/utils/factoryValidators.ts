import { Validators } from '@angular/forms';

interface FactoryValidatorsConfig {
  required: boolean;
  minLength: number;
  maxLength: number;
  email: boolean;
  pattern: string | RegExp;
}

function factoryValidators(
  config: Partial<FactoryValidatorsConfig>
): Validators[] {
  const validators: Validators[] = [Validators.required];
  const errorMessage = 'Config is required';
  const keys = Object.keys(config);

  if (keys.length <= 0) throw new Error(errorMessage);

  if (config.required) validators.push(Validators.required);
  if (config.minLength) validators.push(Validators.minLength(config.minLength));
  if (config.maxLength) validators.push(Validators.maxLength(config.maxLength));
  if (config.email) validators.push(Validators.email);
  if (config.pattern) validators.push(Validators.pattern(config.pattern));

  return validators;
}

export default factoryValidators;

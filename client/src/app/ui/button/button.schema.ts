import { DynamicComponentSchema } from '../../dynamic-renderer/dynamic-components.interfaces';

export interface ButtonSchema extends DynamicComponentSchema {
  '@type': 'Button';
  'type': string;
  'size': string;
  'disabled': boolean;
  'content': string;
}

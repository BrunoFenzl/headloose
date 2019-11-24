import { DynamicComponentSchema } from '../../../dynamic-renderer/dynamic-components.interfaces';

export interface HeadlineSchema extends DynamicComponentSchema {
  '@type': 'Headline';
  title: string;
  size: string;
}
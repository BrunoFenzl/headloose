import { ComponentRef, Injector } from '@angular/core';

/**
 * Dynamic Component Schema Interface
 */
export interface DynamicComponentSchema {
  '@id': string;
  '@type': string;
  [key: string]: any;
}

export type DynamicFormValue = any;

export interface DynamicFormValues {
  [id: string]: DynamicFormValue;
}

export interface DynamicFormComponentSchema extends DynamicComponentSchema {
  initialModel?: DynamicFormValue;
  disabled?: boolean;
  readonly?: boolean;
  validation?: Array<DynamicFormValidationSchema>;
}

export interface DynamicFormValidationSchema {
  rule: string;
  parameters?: Array<string | number | boolean>;
}

export interface DynamicFormRuleCondition {
  '@id': string;
  value: Array<DynamicFormValue>;
}

export interface DynamicFormRule {
  '@id': string | Array<string>;
  conditions: Array<DynamicFormRuleCondition>;
  rule: string;
}

/**
 * Dynamic Component Factory Function
 */
export type DynamicComponentFactoryFunction<T> = (schema: DynamicComponentSchema, injector: Injector) => ComponentRef<T>;

/**
 * Dynamic Component Factory
 */
export interface DynamicComponentFactory<T> {
  for: string;
  create: DynamicComponentFactoryFunction<T>;
}

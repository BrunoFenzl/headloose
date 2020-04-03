import { ComponentRef, Injector } from '@angular/core';

/**
 * Dynamic Component Schema interface
 */
export interface DynamicComponentSchema {
  _id?: string;
  _type: string;
  parent: string;
  name: string;
  children?: Array<string>;
  createdAt?: number;
  updatedAt?: number;
  attributes: DynamicComponentAttributes;
}

export type DynamicFormValue = any;

export interface DynamicFormValues {
  [id: string]: DynamicFormValue;
}

export interface DynamicPageSchema extends DynamicComponentSchema {
  _type: string;
  components: { [id: string]: DynamicComponentSchema };
  activeComponent?: string | null;
}

export interface DynamicFormValidationSchema {
  rule: string;
  parameters?: Array<string | number | boolean>;
}

export interface DynamicFormRuleCondition {
  _id: string;
  value: Array<DynamicFormValue>;
}

export interface DynamicFormRule {
  _id: string | Array<string>;
  conditions: Array<DynamicFormRuleCondition>;
  rule: string;
}

export interface DynamicComponentAttributes {
  meta?: any
  classnames?: Array<string>;

  title?: string;
  slug?: string;
  order?: number;

  content?: string;
  model?: string | number | boolean;
  initialModel?: string | number | boolean;
  modelOptions?: Array<SelectOption>;
  label?: string;
  maxlength?: number;
  minlength?: number;
  min?: number;
  max?: number;
  step?: number;
  size?: number;
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  options?: Array<any>;
  validation?: Array<DynamicFormValidationSchema>;

  no_gutters?: boolean;

  breakpoint_xs?: string;
  breakpoint_sm?: string;
  breakpoint_md?: string;
  breakpoint_lg?: string;
}

export interface SelectOption {
  label: string;
  value: string;
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

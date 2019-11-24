import { InjectionToken } from '@angular/core';
import { DynamicComponentFactory } from './dynamic-components.interfaces';

/**
 * Dynamic Component Factories Injection Token
 */
export const DYNAMIC_COMPONENT_FACTORIES: InjectionToken<DynamicComponentFactory<any>> =
  new InjectionToken<Array<DynamicComponentFactory<any>>>('DYNAMIC_COMPONENT_FACTORIES');

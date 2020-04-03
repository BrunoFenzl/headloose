import {
  DynamicComponentFactory,
  DynamicComponentAttributes,
  DynamicComponentSchema
} from 'src/dynamic-renderer/dynamic-components.interfaces';
import { SwitchComponent } from './switch.component';
import { Injector, ComponentRef, ComponentFactoryResolver, Renderer2 } from '@angular/core';

export const SwitchComponentDynamicFactory: DynamicComponentFactory<SwitchComponent> = {
  create: (schema: DynamicComponentSchema, injector: Injector): ComponentRef<SwitchComponent> => {
    const renderer: Renderer2 = injector.get(Renderer2);

    const componentRef: ComponentRef<SwitchComponent> = injector
      .get(ComponentFactoryResolver)
      .resolveComponentFactory(SwitchComponent)
      .create(injector);

    // These properties from the schema should be populated as attributes in this component's instance
    const attributes: Array<keyof DynamicComponentAttributes> = [
      'label',
      'model',
      'readonly',
      'disabled',
      'required',
    ];

    attributes
      .filter((option: string): boolean => {
        return schema[option] !== undefined && schema[option] !== null;
      })
      .forEach((option: string): void => {
        componentRef.instance[option] = schema[option];
      });

    componentRef.instance.id = schema._id;

    (schema.attributes.classnames || [])
      .forEach(
        (className: string): void => {
          renderer.addClass(componentRef.location.nativeElement, className);
        }
      );

    return componentRef;
  },
  for: 'Switch',
};

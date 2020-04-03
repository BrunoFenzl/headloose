import { DynamicComponentFactory, DynamicComponentSchema } from 'src/dynamic-renderer/dynamic-components.interfaces';
import { RowComponent } from './row.component';
import { Injector, ComponentRef, ComponentFactoryResolver, Renderer2 } from '@angular/core';

export const RowComponentDynamicFactory: DynamicComponentFactory<RowComponent> = {
  create: (schema: DynamicComponentSchema, injector: Injector): ComponentRef<RowComponent> => {
    const renderer: Renderer2 = injector.get(Renderer2);

    const componentRef: ComponentRef<RowComponent> = injector
      .get(ComponentFactoryResolver)
      .resolveComponentFactory(RowComponent)
      .create(injector);

    // These properties from the schema should be populated as attributes in this component's instance
    const attributes: Array<keyof DynamicComponentSchema> = [
      'children',
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
  for: 'Row',
};

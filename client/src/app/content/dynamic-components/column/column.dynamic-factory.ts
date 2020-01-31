import { DynamicComponentFactory } from 'src/dynamic-renderer/dynamic-components.interfaces';
import { ColumnComponent } from './column.component';
import { ColumnSchema } from './column.schema';
import { Injector, ComponentRef, ComponentFactoryResolver, Renderer2 } from '@angular/core';

export const ColumnComponentDynamicFactory: DynamicComponentFactory<ColumnComponent> = {
  create: (schema: ColumnSchema, injector: Injector): ComponentRef<ColumnComponent> => {
    const renderer: Renderer2 = injector.get(Renderer2);

    const componentRef: ComponentRef<ColumnComponent> = injector
      .get(ComponentFactoryResolver)
      .resolveComponentFactory(ColumnComponent)
      .create(injector);

    // These properties from the schema should be populated as attributes in this component's instance
    const attributes: Array<keyof ColumnSchema> = [
      'children',
    ];

    attributes
      .filter((option: string): boolean => {
        return schema[option] !== undefined && schema[option] !== null;
      })
      .forEach((option: string): void => {
        componentRef.instance[option] = schema[option];
      });

    componentRef.instance.id = schema['@id'];

    (schema.classes || [])
      .forEach(
        (className: string): void => {
          renderer.addClass(componentRef.location.nativeElement, className);
        }
      );

    return componentRef;
  },
  for: 'Column',
};

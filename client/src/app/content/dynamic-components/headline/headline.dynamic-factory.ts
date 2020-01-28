import { DynamicComponentFactory } from 'src/dynamic-renderer/dynamic-components.interfaces';
import { HeadlineComponent } from './headline.component';
import { HeadlineSchema } from './headline.schema';
import { Injector, ComponentRef, ComponentFactoryResolver, Renderer, Renderer2 } from '@angular/core';

export const HeadlineComponentDynamicFactory: DynamicComponentFactory<HeadlineComponent> = {
  create: (schema: HeadlineSchema, injector: Injector): ComponentRef<HeadlineComponent> => {
    const renderer: Renderer2 = injector.get(Renderer2);

    const componentRef: ComponentRef<HeadlineComponent> = injector
      .get(ComponentFactoryResolver)
      .resolveComponentFactory(HeadlineComponent)
      .create(injector);

    // These properties from the schema should be populated as attributes in this component's instance
    const attributes: Array<keyof HeadlineSchema> = [
      'children',
      'options',
      'size',
      'content',
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
  for: 'Headline',
};

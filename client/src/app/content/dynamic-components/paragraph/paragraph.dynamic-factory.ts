import {
  DynamicComponentFactory,
  DynamicComponentAttributes,
  DynamicComponentSchema
} from 'src/dynamic-renderer/dynamic-components.interfaces';
import { ParagraphComponent } from './paragraph.component';
import { Injector, ComponentRef, ComponentFactoryResolver, Renderer2 } from '@angular/core';

export const ParagraphComponentDynamicFactory: DynamicComponentFactory<ParagraphComponent> = {
  create: (schema: DynamicComponentSchema, injector: Injector): ComponentRef<ParagraphComponent> => {
    const renderer: Renderer2 = injector.get(Renderer2);

    const componentRef: ComponentRef<ParagraphComponent> = injector
      .get(ComponentFactoryResolver)
      .resolveComponentFactory(ParagraphComponent)
      .create(injector);

    // These properties from the schema should be populated as attributes in this component's instance
    const attributes: Array<keyof DynamicComponentAttributes> = [
      'content',
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
  for: 'Paragraph',
};

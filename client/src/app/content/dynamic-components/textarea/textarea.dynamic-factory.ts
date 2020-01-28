import { DynamicComponentFactory } from 'src/dynamic-renderer/dynamic-components.interfaces';
import { TextareaComponent } from './textarea.component';
import { TextareaSchema } from './textarea.schema';
import { Injector, ComponentRef, ComponentFactoryResolver, Renderer, Renderer2 } from '@angular/core';

export const TextareaComponentDynamicFactory: DynamicComponentFactory<TextareaComponent> = {
  create: (schema: TextareaSchema, injector: Injector): ComponentRef<TextareaComponent> => {
    const renderer: Renderer2 = injector.get(Renderer2);

    const componentRef: ComponentRef<TextareaComponent> = injector
      .get(ComponentFactoryResolver)
      .resolveComponentFactory(TextareaComponent)
      .create(injector);

    // These properties from the schema should be populated as attributes in this component's instance
    const attributes: Array<keyof TextareaSchema> = [
      'name',
      'model',
      'maxlength',
      'minlength',
      'size',
      'placeholder',
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

    componentRef.instance.id = schema['@id'];

    (schema.classes || [])
      .forEach(
        (className: string): void => {
          renderer.addClass(componentRef.location.nativeElement, className);
        }
      );

    return componentRef;
  },
  for: 'Textarea',
};

import { DynamicComponentFactory } from 'src/dynamic-renderer/dynamic-components.interfaces';
import { TextInputComponent } from './text-input.component';
import { TextInputSchema } from './text-input.schema';
import { Injector, ComponentRef, ComponentFactoryResolver, Renderer2 } from '@angular/core';

export const TextInputComponentDynamicFactory: DynamicComponentFactory<TextInputComponent> = {
  create: (schema: TextInputSchema, injector: Injector): ComponentRef<TextInputComponent> => {
    const renderer: Renderer2 = injector.get(Renderer2);

    const componentRef: ComponentRef<TextInputComponent> = injector
      .get(ComponentFactoryResolver)
      .resolveComponentFactory(TextInputComponent)
      .create(injector);

    // These properties from the schema should be populated as attributes in this component's instance
    const attributes: Array<keyof TextInputSchema> = [
      'label',
      'name',
      'model',
      'minlength',
      'maxlength',
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
  for: 'TextInput',
};

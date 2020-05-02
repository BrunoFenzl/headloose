import { DynamicComponentFactory } from 'src/dynamic-renderer/dynamic-components.interfaces';
import { NumberInputComponent } from './number-input.component';
import { NumberInputSchema } from './number-input.schema';
import { Injector, ComponentRef, ComponentFactoryResolver, Renderer2 } from '@angular/core';

export const NumberInputComponentDynamicFactory: DynamicComponentFactory<NumberInputComponent> = {
  create: (schema: NumberInputSchema, injector: Injector): ComponentRef<NumberInputComponent> => {
    const renderer: Renderer2 = injector.get(Renderer2);

    const componentRef: ComponentRef<NumberInputComponent> = injector
      .get(ComponentFactoryResolver)
      .resolveComponentFactory(NumberInputComponent)
      .create(injector);

    // These properties from the schema should be populated as attributes in this component's instance
    const attributes: Array<keyof NumberInputSchema> = [
      'label',
      'name',
      'model',
      'max',
      'min',
      'step',
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
  for: 'NumberInput',
};

import { DynamicComponentFactory } from 'src/app/dynamic-renderer/dynamic-components.interfaces';
import { ButtonSchema } from './button.schema';
import { Injector, ComponentRef, Renderer2, ComponentFactoryResolver } from '@angular/core';
import { ButtonComponent } from './button.component';

export const buttonDynamicFactory: DynamicComponentFactory<ButtonComponent> = {
  create: (schema: ButtonSchema, injector: Injector): ComponentRef<ButtonComponent> => {
    // Get renderer
    const renderer: Renderer2 = injector.get(Renderer2);

    // Resolve and create component
    const componentRef: ComponentRef<ButtonComponent> = injector
      // TODO: update get() as stated in deprecation notice
      .get(ComponentFactoryResolver)
      .resolveComponentFactory(ButtonComponent)
      .create(injector);

    // Configure
    const attributes: Array<keyof ButtonSchema> = [
      'type',
      'size',
      'disabled',
      'content',
    ];

    attributes
      .filter((option: string): boolean => {
        return schema[option] !== undefined && schema[option] !== null;
      })
      .forEach((option: string): void => {
        componentRef.instance[option] = schema[option];
      });

    // Apply classes
    (schema.classes || [])
      .forEach((className: string): void => {
        renderer.addClass(componentRef.location.nativeElement, className);
      });

    // Done!
    return componentRef;
  },
  for: 'Button' // the string given in this components @type
};

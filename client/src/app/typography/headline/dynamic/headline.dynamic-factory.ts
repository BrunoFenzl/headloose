import { DynamicComponentFactory } from 'src/app/dynamic-renderer/dynamic-components.interfaces';
import { HeadlineComponent } from '../headline.component';
import { HeadlineSchema } from './headline.schema';
import { Injector, ComponentRef, Renderer2, ComponentFactoryResolver } from '@angular/core';

export const headlineDynamicFactory: DynamicComponentFactory<HeadlineComponent> = {
  create: (schema: HeadlineSchema, injector:Injector): ComponentRef<HeadlineComponent> => {
    // Get renderer
    const renderer: Renderer2 = injector.get(Renderer2);

    // Resolve and create component
    const componentRef: ComponentRef<HeadlineComponent> = injector
      // TODO: update get() as stated in deprecation notice
      .get(ComponentFactoryResolver)
      .resolveComponentFactory(HeadlineComponent)
      .create(injector);

    // Configure
    const attributes: Array<keyof HeadlineSchema> = [
      'title',
      'size',
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
  for: 'Headline' // the string given in this components @type
}

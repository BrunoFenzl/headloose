import { DynamicComponentFactory, DynamicComponentSchema } from '../../dynamic-components.interfaces';
import { Optional, Inject, Injector, ComponentRef } from '@angular/core';
import { DYNAMIC_COMPONENT_FACTORIES } from '../../injection-token';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DynamicErrorService } from '../../error/error.service';


export class DynamicComponentRegistryService {

  /**
   * List of dynamiccomponent factories
   */
  private readonly dynamicComponentFactories: Array<DynamicComponentFactory<any>>;

  constructor(
    @Optional() @Inject(DYNAMIC_COMPONENT_FACTORIES) dynamicComponentFactories: any | null, // no type!
  ) {
    this.dynamicComponentFactories = <Array<DynamicComponentFactory<any>>> (dynamicComponentFactories || []);
  }

  public createComponent(schema: DynamicComponentSchema, injector: Injector): ComponentRef<any> | null {
    // find component factory, based on a given '@type'
    const factory: DynamicComponentFactory<any> | null = this.dynamicComponentFactories
      .find((dynamicComponentFactory: DynamicComponentFactory<any>): boolean => {
        return dynamicComponentFactory.for === schema['@type'];
      }) || null;

    if (!factory) {
      const dynamicErrorService: DynamicErrorService = injector.get(DynamicErrorService, null);
      const error: Error = new Error(`No factory found for the component of type "${schema['@type']}"!`);

      if (dynamicErrorService) {
        dynamicErrorService.handleError(error);
        return null;
      } else {
        throw error;
      }
    }

    // create component
    const componentRef: ComponentRef<any> = factory.create(schema, injector);

    // cleanup on destroy
    componentRef.onDestroy( (): void => {
      componentRef.changeDetectorRef.detach();
    });

    return componentRef;
  }

  /**
   * Destroy and cleanup the given component
   *
   * @param componentRef component reference
   */
  public destroyComponent(componentRef: ComponentRef<any>): void {
    componentRef.destroy();
  }

  /**
   * Check if the given component is a form component and can be used with angular reactive forms
   * @param componentRef component reference
   */
  public isFormComponent(componentRef: ComponentRef<any>): boolean {
    // Check if the component has provided itself as an 'NG_VALUE_ACCESSOR'
    // The 'NG_VALUE_ACCESSOR' multi provider only works on the same DI level
    // thus, going up the DI hierarchy will not work
    return componentRef.injector.get(NG_VALUE_ACCESSOR, null) !== null;
  }
}

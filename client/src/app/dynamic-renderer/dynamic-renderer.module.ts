import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponentDirective } from './dynamic-directive/dynamic-component.directive';
import { DynamicComponentRegistryService } from './dynamic-component/dynamic-component-registry/dynamic-component-registry.service';
import { DYNAMIC_COMPONENT_FACTORIES } from './injection-token';
import { dynamicComponentRegistryServiceFactory } from './dynamic-component/dynamic-component-registry/dynamic-component-registry.service-factory';



@NgModule({
  declarations: [DynamicComponentDirective],
  exports: [DynamicComponentDirective],
  imports: [
    CommonModule
  ],
  providers: [
    {
      deps: [
        [new Optional(), new SkipSelf(), DynamicComponentRegistryService],
        DYNAMIC_COMPONENT_FACTORIES,
      ],
      provide: DynamicComponentRegistryService,
      useFactory: dynamicComponentRegistryServiceFactory,
    }
  ]
})
export class DynamicRendererModule { }

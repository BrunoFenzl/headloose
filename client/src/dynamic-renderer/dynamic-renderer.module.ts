import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponentDirective } from './dynamic-directive/dynamic-component.directive';
import { DYNAMIC_COMPONENT_FACTORIES } from './injection-token';
import {
  DynamicComponentRegistryService
} from './dynamic-component/dynamic-component-registry/dynamic-component-registry.service';
import {
  dynamicComponentRegistryServiceFactory
} from './dynamic-component/dynamic-component-registry/dynamic-component-registry.service-factory';
import { SchemaGeneratorService } from './schema-generator.service';



@NgModule({
  declarations: [DynamicComponentDirective],
  exports: [DynamicComponentDirective],
  imports: [
    CommonModule
  ],
  providers: [
    SchemaGeneratorService,
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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Renderer
import { DYNAMIC_COMPONENT_FACTORIES } from 'src/dynamic-renderer/injection-token';
import { DynamicRendererModule } from 'src/dynamic-renderer/dynamic-renderer.module';
import { SchemaGeneratorService } from './schema-generator.service';
import { ComponentOptionsComponent } from '../component-options/component-options.component';

// UI
import { RowComponent, RowComponentDynamicFactory } from './row';
import { ColumnComponent, ColumnComponentDynamicFactory } from './column';
import { TextInputComponent, TextInputComponentDynamicFactory } from './text-input';
import { SelectComponent, SelectComponentDynamicFactory } from './select';
import { TextareaComponent, TextareaComponentDynamicFactory } from './textarea';
import { HeadlineComponent, HeadlineComponentDynamicFactory } from './headline';
import { ParagraphComponent, ParagraphComponentDynamicFactory } from './paragraph';
import { NumberInputComponent, NumberInputComponentDynamicFactory } from './number-input';
import { SwitchComponent, SwitchComponentDynamicFactory } from './switch';

@NgModule({
  declarations: [
    RowComponent,
    ColumnComponent,
    TextInputComponent,
    SelectComponent,
    TextareaComponent,
    NumberInputComponent,
    HeadlineComponent,
    ParagraphComponent,
    ComponentOptionsComponent,
    SwitchComponent,
  ],
  imports: [
    CommonModule,
    DynamicRendererModule,
  ],
  exports: [
    DynamicRendererModule,
  ],
  entryComponents: [
    RowComponent,
    ColumnComponent,
    TextInputComponent,
    SelectComponent,
    ParagraphComponent,
    HeadlineComponent,
    NumberInputComponent,
    TextareaComponent,
    SwitchComponent,
  ],
  providers: [
    SchemaGeneratorService,
    {
      multi: true,
      provide: DYNAMIC_COMPONENT_FACTORIES,
      useValue: RowComponentDynamicFactory,
    },
    {
      multi: true,
      provide: DYNAMIC_COMPONENT_FACTORIES,
      useValue: ColumnComponentDynamicFactory,
    },
    {
      multi: true,
      provide: DYNAMIC_COMPONENT_FACTORIES,
      useValue: TextInputComponentDynamicFactory,
    },
    {
      multi: true,
      provide: DYNAMIC_COMPONENT_FACTORIES,
      useValue: SelectComponentDynamicFactory,
    },
    {
      multi: true,
      provide: DYNAMIC_COMPONENT_FACTORIES,
      useValue: TextareaComponentDynamicFactory,
    },
    {
      multi: true,
      provide: DYNAMIC_COMPONENT_FACTORIES,
      useValue: ParagraphComponentDynamicFactory,
    },
    {
      multi: true,
      provide: DYNAMIC_COMPONENT_FACTORIES,
      useValue: HeadlineComponentDynamicFactory,
    },
    {
      multi: true,
      provide: DYNAMIC_COMPONENT_FACTORIES,
      useValue: NumberInputComponentDynamicFactory,
    },
    {
      multi: true,
      provide: DYNAMIC_COMPONENT_FACTORIES,
      useValue: SwitchComponentDynamicFactory,
    }
  ],
})
export class DynamicComponentsModule { }

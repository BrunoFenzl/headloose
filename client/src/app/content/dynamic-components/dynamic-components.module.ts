import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Renderer
import { DYNAMIC_COMPONENT_FACTORIES } from 'src/dynamic-renderer/injection-token';
import { DynamicRendererModule } from 'src/dynamic-renderer/dynamic-renderer.module';
import { ComponentOptionsComponent } from '../component-options/component-options.component';
// UI
import { RowComponent } from './row/row.component';
import { RowComponentDynamicFactory } from './row/row.dynamic-factory';
import { ColumnComponent } from './column/column.component';
import { ColumnComponentDynamicFactory } from './column/column.dynamic-factory';
import { TextInputComponent } from './text-input/text-input.component';
import { TextInputComponentDynamicFactory } from './text-input/text-input.dynamic-factory';
import { RadioGroupComponent } from './radio-group/radio-group.component';
import { CheckboxGroupComponent } from './checkbox-group/checkbox-group.component';
import { SelectComponent } from './select/select.component';
import { TextareaComponent } from './textarea/textarea.component';
import { NumberInputComponent } from './number-input/number-input.component';
import { HeadlineComponent } from './headline/headline.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { SelectComponentDynamicFactory } from './select/select.dynamic-factory';
import { SchemaGeneratorService } from './schema-generator.service';
import { TextareaComponentDynamicFactory } from './textarea/textarea.dynamic-factory';
import { ParagraphComponentDynamicFactory } from './paragraph/paragraph.dynamic-factory';


@NgModule({
  declarations: [
    RowComponent,
    ColumnComponent,
    TextInputComponent,
    RadioGroupComponent,
    CheckboxGroupComponent,
    SelectComponent,
    TextareaComponent,
    NumberInputComponent,
    HeadlineComponent,
    ParagraphComponent,
    ComponentOptionsComponent,
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
    TextareaComponent,
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
    }
  ],
})
export class DynamicComponentsModule { }

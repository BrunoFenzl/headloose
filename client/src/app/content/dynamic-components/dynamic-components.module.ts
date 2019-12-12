import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RowComponent } from './row/row.component';
import { DYNAMIC_COMPONENT_FACTORIES } from 'src/dynamic-renderer/injection-token';
import { RowComponentDynamicFactory } from './row/row.dynamic-factory';
import { ComponentOptionsComponent } from '../component-options/component-options.component';
import { DynamicRendererModule } from 'src/dynamic-renderer/dynamic-renderer.module';
import { ColumnComponent } from './column/column.component';
import { ColumnComponentDynamicFactory } from './column/column.dynamic-factory';
import { TextInputComponent } from './text-input/text-input.component';
import { TextInputComponentDynamicFactory } from './text-input/text-input.dynamic-factory';

@NgModule({
  declarations: [RowComponent, ComponentOptionsComponent, ColumnComponent, TextInputComponent],
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
  ],
  providers: [
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
    }
  ],
})
export class DynamicComponentsModule { }

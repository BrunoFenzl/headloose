import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';
import { EditorComponent } from './editor/editor.component';
import { DynamicRendererModule } from '../../dynamic-renderer/dynamic-renderer.module';
import { DYNAMIC_COMPONENT_FACTORIES } from '../../dynamic-renderer/injection-token';


@NgModule({
  declarations: [OverviewComponent, EditorComponent],
  exports: [
    OverviewComponent, EditorComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    DynamicRendererModule,
  ],
  entryComponents: [],
  providers: [
    // {
    //   multi: true,
    //   provide: DYNAMIC_COMPONENT_FACTORIES,
    //   useValue: headlineDynamicFactory,
    // },
    // {
    //   multi: true,
    //   provide: DYNAMIC_COMPONENT_FACTORIES,
    //   useValue: buttonDynamicFactory,
    // }
  ],
})
export class ContentModule { }

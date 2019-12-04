import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';
import { EditorComponent } from './editor/editor.component';
import { DynamicRendererModule } from '../../dynamic-renderer/dynamic-renderer.module';
import { DYNAMIC_COMPONENT_FACTORIES } from '../../dynamic-renderer/injection-token';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store';
import { EffectsModule } from '@ngrx/effects';
import { PagesEffects } from './store/effects/pages.effects';
import { PagesService } from './store/pages.service';
import { ContentRoutingModule } from './content-routing.module';

@NgModule({
  declarations: [
    OverviewComponent,
    EditorComponent
  ],
  exports: [
    OverviewComponent,
    EditorComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    DynamicRendererModule,
    StoreModule.forFeature('pages', reducer),
    EffectsModule.forFeature([PagesEffects]),
    ContentRoutingModule,
  ],
  entryComponents: [],
  providers: [
    PagesService,

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

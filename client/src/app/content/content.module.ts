import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';
import { EditorComponent } from './editor/editor.component';
import { StoreModule } from '@ngrx/store';
// import { reducers } from './store';
import { EffectsModule } from '@ngrx/effects';
import { PagesEffects } from './store/effects/content.effects';
import { PagesService } from './store/content.service';
import { ContentRoutingModule } from './content-routing.module';
import { DynamicComponentsModule } from './dynamic-components/dynamic-components.module';
import { OptionsRendererComponent } from './options-renderer/options-renderer.component';
import { contentReducer } from './store';

@NgModule({
  declarations: [
    OverviewComponent,
    EditorComponent,
    OptionsRendererComponent,
  ],
  exports: [
    OverviewComponent,
    EditorComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    StoreModule.forFeature('content', contentReducer),
    EffectsModule.forFeature([PagesEffects]),
    ContentRoutingModule,
    DynamicComponentsModule,
  ],
  entryComponents: [],
  providers: [
    PagesService,
  ],
})
export class ContentModule { }

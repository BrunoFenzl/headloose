import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';
import { EditorComponent } from './editor/editor.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ContentService } from './store/content.service';
import { ContentRoutingModule } from './content-routing.module';
import { DynamicComponentsModule } from './dynamic-components/dynamic-components.module';
import { contentReducer } from './store';
import { OptionsRendererComponent } from './options-renderer/options-renderer.component';
import { PageEffects } from './store/effects/page.effects';
import { ContentEffects } from './store/effects/content.effects';

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
    EffectsModule.forFeature([PageEffects, ContentEffects]),
    ContentRoutingModule,
    DynamicComponentsModule,
  ],
  entryComponents: [],
  providers: [
    ContentService,
  ],
})
export class ContentModule { }

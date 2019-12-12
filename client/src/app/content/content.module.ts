import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';
import { EditorComponent } from './editor/editor.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store';
import { EffectsModule } from '@ngrx/effects';
import { PagesEffects } from './store/effects/pages.effects';
import { PagesService } from './store/pages.service';
import { ContentRoutingModule } from './content-routing.module';
import { DynamicComponentsModule } from './dynamic-components/dynamic-components.module';
import { OptionsRendererComponent } from './options-renderer/options-renderer.component';

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
    StoreModule.forFeature('pages', reducer),
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

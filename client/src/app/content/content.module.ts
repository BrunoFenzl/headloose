// Vendos
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// State
import { contentReducer, ContentEffects, PageEffects, ContentService } from './store';

import { ContentRoutingModule } from './content-routing.module';

// Components
import { ModalService, ModalComponent } from '../modal';
import { OverviewComponent } from './overview/overview.component';
import { EditorComponent } from './editor/editor.component';
import { DynamicComponentsModule } from './dynamic-components/dynamic-components.module';
import { OptionsRendererComponent } from './options-renderer/options-renderer.component';
import { ComponentsListComponent } from './components-list/components-list.component';


@NgModule({
  declarations: [
    OverviewComponent,
    EditorComponent,
    OptionsRendererComponent,
    ModalComponent,
    ComponentsListComponent,
  ],
  exports: [
    OverviewComponent,
    EditorComponent,
    ModalComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    StoreModule.forFeature('content', contentReducer),
    EffectsModule.forFeature([ContentEffects]),
    ContentRoutingModule,
    DynamicComponentsModule,
    OverlayModule,
  ],
  entryComponents: [
    ModalComponent,
    OptionsRendererComponent,
  ],
  providers: [
    ModalService,
    ContentService,
  ],
})
export class ContentModule { }

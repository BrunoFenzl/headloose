// Vendos
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// State
import { contentReducer, ContentEffects, PageEffects } from './store';

import { ContentRoutingModule } from './content-routing.module';

// Components
import { ModalService, ModalComponent } from '../modal';
import { OverviewComponent } from './overview/overview.component';
import { EditorComponent } from './editor/editor.component';
import { DynamicComponentsModule } from './dynamic-components/dynamic-components.module';
import { OptionsRendererComponent } from './options-renderer/options-renderer.component';
import { ComponentsListComponent } from './components-list/components-list.component';
import { PageService } from '../services/page.service';
import { NetworkService } from '../services/network.service';
import { PageListItemComponent } from './page-list-item/page-list-item.component';
import { AddComponentComponent } from './add-component/add-component.component';


@NgModule({
  declarations: [
    OverviewComponent,
    EditorComponent,
    OptionsRendererComponent,
    ModalComponent,
    ComponentsListComponent,
    PageListItemComponent,
    AddComponentComponent,
  ],
  exports: [
    OverviewComponent,
    EditorComponent,
    ModalComponent,
    AddComponentComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    StoreModule.forFeature('content', contentReducer),
    // Disabling effects since we are not talking to
    // any external data store right now.
    EffectsModule.forFeature([ContentEffects]),
    ContentRoutingModule,
    DynamicComponentsModule,
    OverlayModule,
  ],
  entryComponents: [
    ModalComponent,
    OptionsRendererComponent,
    ComponentsListComponent,
  ],
  providers: [
    ModalService,
    NetworkService,
    PageService
  ],
})
export class ContentModule { }

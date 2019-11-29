import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages/pages.component';
import { EditorComponent } from './editor/editor.component';
import { SettingsComponent } from './settings/settings.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicRendererModule } from '../dynamic-renderer/dynamic-renderer.module';
import { DYNAMIC_COMPONENT_FACTORIES } from '../dynamic-renderer/injection-token';
import { headlineDynamicFactory } from '../typography/headline/dynamic/headline.dynamic-factory';
import { TypographyModule } from '../typography/typography.module';
import { buttonDynamicFactory } from '../ui/button/button.dynamic-factory';
import { ButtonComponent } from '../ui/button/button.component';
import { HeadlineComponent } from '../typography/headline/headline.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MediaLibraryComponent } from './media-library/media-library.component';


@NgModule({
  declarations: [PagesComponent, EditorComponent, SettingsComponent, PageNotFoundComponent, MediaLibraryComponent],
  exports: [
    PagesComponent, EditorComponent, SettingsComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    DynamicRendererModule,
    TypographyModule,
  ],
  entryComponents: [
    HeadlineComponent,
    ButtonComponent,
  ],
  providers: [
    {
      multi: true,
      provide: DYNAMIC_COMPONENT_FACTORIES,
      useValue: headlineDynamicFactory,
    },
    {
      multi: true,
      provide: DYNAMIC_COMPONENT_FACTORIES,
      useValue: buttonDynamicFactory,
    }
  ],
})
export class PagesModule { }

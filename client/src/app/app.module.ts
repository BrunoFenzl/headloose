import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentModule } from './content/content.module';
import { environment } from '../environments/environment';
import { PagesReducer } from './content/store/reducers/pages.reducer';
import { PagesEffects } from './content/store/effects/pages.effects';
import { MediaLibraryModule } from './media-library/media-library.module';
import { SettingsModule } from './settings/settings.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Angular
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
    // App
    ContentModule,
    MediaLibraryModule,
    SettingsModule,
    PageNotFoundModule,
    // Vendor
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([PagesEffects]),
    StoreModule.forRoot({
      pages: PagesReducer,
    }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

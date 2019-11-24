import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DynamicRendererModule } from './dynamic-renderer/dynamic-renderer.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DYNAMIC_COMPONENT_FACTORIES } from './dynamic-renderer/injection-token';
import { headlineDynamicFactory } from './typography/headline/dynamic/headline.dynamic-factory';
import { HeadlineComponent } from './typography/headline/headline.component';
import { TypographyModule } from './typography/typography.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    DynamicRendererModule,
    ReactiveFormsModule,
    TypographyModule,
  ],
  entryComponents: [
    HeadlineComponent,
  ],
  providers: [
    {
      multi: true,
      provide: DYNAMIC_COMPONENT_FACTORIES,
      useValue: headlineDynamicFactory,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

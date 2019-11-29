import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages/pages.component';
import { EditorComponent } from './pages/editor/editor.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MediaLibraryComponent } from './pages/media-library/media-library.component';


const routes: Routes = [
  { path: 'pages', component: PagesComponent },
  { path: 'pages/:id', component: EditorComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'media-library', component: MediaLibraryComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { enableTracing: true },
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './content/overview/overview.component';
import { EditorComponent } from './content/editor/editor.component';
import { SettingsComponent } from './settings/settings.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MediaLibraryComponent } from './media-library/media-library.component';


const routes: Routes = [
  { path: 'pages', component: OverviewComponent },
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

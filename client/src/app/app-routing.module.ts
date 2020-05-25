import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./content/content.module').then(m => m.ContentModule),
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule),
  },
  {
    path: 'media-library',
    loadChildren: () => import('./media-library/media-library.module').then(m => m.MediaLibraryModule),
  },
  {
    path: '',
    redirectTo: '/pages',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { MediaLibraryComponent } from './media-library.component';
import { RouterModule, Routes } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: '',
    component: MediaLibraryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})

export class MediaLibraryRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaLibraryComponent } from './media-library.component';



@NgModule({
  declarations: [MediaLibraryComponent],
  exports: [MediaLibraryComponent],
  imports: [
    CommonModule
  ]
})
export class MediaLibraryModule { }

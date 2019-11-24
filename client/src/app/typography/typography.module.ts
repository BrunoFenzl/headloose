import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadlineComponent } from './headline/headline.component';

@NgModule({
  declarations: [HeadlineComponent],
  exports: [HeadlineComponent],
  imports: [
    CommonModule
  ]
})
export class TypographyModule { }

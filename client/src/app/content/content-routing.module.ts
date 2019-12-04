import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverviewComponent } from './overview/overview.component';
import { EditorComponent } from './editor/editor.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: OverviewComponent,
  },
  {
    path: ':id',
    component: EditorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }

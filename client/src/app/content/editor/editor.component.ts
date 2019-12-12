import { Component, OnInit } from '@angular/core';
import { DynamicFormComponentSchema } from '../../../dynamic-renderer/dynamic-components.interfaces';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ContentState, PageModel, getSelectedPage } from '../store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  public page$: Observable<PageModel>;
  public form: FormGroup;
  public controlsFormSchema: DynamicFormComponentSchema[];

  constructor(
    private store: Store<ContentState>
  ) {

    this.form = new FormGroup({});
    this.controlsFormSchema = [
      {
        '@id': 'test',
        '@type': 'Row',
        children: [
          {
            '@id': 'test',
            '@type': 'Column',
            classes: ['dyn-col', 'col-12', 'col-md-6', 'col-lg-4'],
            children: [
              {
                '@id': 'sdfsdfsd',
                '@type': 'TextInput',
              }
            ],
          },
          {
            '@id': 'test',
            '@type': 'Column',
            classes: ['dyn-col', 'col-12', 'col-md-6', 'col-lg-4'],
            children: [],
          },
          {
            '@id': 'test',
            '@type': 'Column',
            classes: ['dyn-col', 'col-12', 'col-md-6', 'col-lg-4'],
            children: [],
          },
        ],
      },
    ];
  }

  ngOnInit() {
    this.page$ = this.store.select(getSelectedPage);
  }

}

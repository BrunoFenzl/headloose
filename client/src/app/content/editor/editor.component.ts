import { Component, OnInit } from '@angular/core';
import { DynamicPageSchema, DynamicComponentSchema } from '../../../dynamic-renderer/dynamic-components.interfaces';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ContentState, PageModel, getSelectedPage, getSelectedPageContentParsed } from '../store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  public page$: Observable<DynamicComponentSchema[]>;
  public children$: Observable<DynamicComponentSchema[]>;
  public form: FormGroup;
  public pageContent: DynamicPageSchema;

  constructor(
    private store: Store<ContentState>
  ) {

    this.form = new FormGroup({});
    this.pageContent = {
      '@id': 'page-1',
      '@type': 'Page',
      children: ['row-1'],
      activeComponent: null,
      components: {
        'row-1': {
          '@id': 'row-1',
          '@type': 'Row',
          parent: 'page-1',
          children: ['column-1', 'column-2', 'column-3'],
        },
        'column-1': {
          '@id': 'column-1',
          '@type': 'Column',
          classes: ['dyn-col', 'col-12', 'col-md-6', 'col-lg-4'],
          children: ['input-1'],
        },
        'column-2': {
          '@id': 'column-2',
          '@type': 'Column',
          classes: ['dyn-col', 'col-12', 'col-md-6', 'col-lg-4'],
          children: [],
        },
        'column-3': {
          '@id': 'column-3',
          '@type': 'Column',
          classes: ['dyn-col', 'col-12', 'col-md-6', 'col-lg-4'],
          children: [],
        },
        'input-1': {
          '@id': 'input-1',
          '@type': 'TextInput',
        }
      }
    };
  }

  ngOnInit() {
    this.page$ = this.store.select(getSelectedPageContentParsed);
  }

}

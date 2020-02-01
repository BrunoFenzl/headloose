import { Component, OnInit } from '@angular/core';
import { DynamicPageSchema, DynamicComponentSchema } from '../../../dynamic-renderer/dynamic-components.interfaces';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ContentState, getSelectedPageContentParsed, LoadPageAction } from '../store';
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
  }

  ngOnInit() {
    this.store.dispatch(new LoadPageAction('1'));
    this.page$ = this.store.select(getSelectedPageContentParsed);
  }

}

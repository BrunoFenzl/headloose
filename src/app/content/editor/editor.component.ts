import { Component, OnInit } from '@angular/core';
import { DynamicPageSchema, DynamicComponentSchema } from '../../../dynamic-renderer/dynamic-components.interfaces';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ContentState, getSelectedPageContentParsed, LoadPageAction } from '../store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AppState, getRouterState, RouterStateUrl } from 'src/app/store';
import { RouterReducerState } from '@ngrx/router-store';
import { map } from 'rxjs/operators';
import { PageService } from 'src/app/services/page.service';
import { RowDefaults } from '../dynamic-components/row';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  public page$: Observable<DynamicComponentSchema[]>;
  public children$: Observable<DynamicComponentSchema[]>;
  public form: FormGroup;
  public pageId$: Observable<RouterReducerState<RouterStateUrl>>;

  constructor(
    private store: Store<AppState>,
    private pageService: PageService,
  ) {
    this.form = new FormGroup({});
  }

  ngOnInit() {
    this.store.select(getRouterState).subscribe(
      (r => {
        this.store.dispatch(new LoadPageAction(r.state.params.id));
      })
    );
    this.page$ = this.store.select(getSelectedPageContentParsed);
  }

  addRow(): void {
    this.pageService.addComponent(new RowDefaults());
  }

}

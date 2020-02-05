import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ContentState } from 'src/app/content/store/models/content.model';
import { Observable } from 'rxjs';
import { PageDefaults } from '../store/models/pages.model';
import { LoadPagesAction, AddPageAction, DeletePageAction, getPagesArray } from '../store';
import { DynamicPageSchema } from 'src/dynamic-renderer/dynamic-components.interfaces';


@Component({
  selector: 'app-pages',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  public state$: Observable<DynamicPageSchema[]>;

  constructor(
    private store: Store<ContentState>,
  ) { }

  ngOnInit() {
    this.state$ = this.store.select(getPagesArray);
    this.store.dispatch(new LoadPagesAction());
  }

  addPage(): void {
    this.store.dispatch(new AddPageAction(new PageDefaults({})));
  }

  deletePage(pageId: string): void {
    this.store.dispatch(new DeletePageAction(pageId));
  }
}

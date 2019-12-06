import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ContentState } from 'src/app/content/store/models/content.model';
import { Observable } from 'rxjs';
import { PageModel } from '../store/models/pages.model';
import { LoadPagesAction, AddPageAction, DeletePageAction } from '../store';


@Component({
  selector: 'app-pages',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  private state$: Observable<Array<PageModel>>;

  constructor(
    private store: Store<ContentState>,
  ) { }

  ngOnInit() {
    this.state$ = this.store.select(store => {
      const e = store.pages.entities;
      return Object.keys(e).map(id => e[id]);
    });
    this.store.dispatch(new LoadPagesAction());
  }

  addPage(): void {
    this.store.dispatch(new AddPageAction({
      title: 'New Page',
      path: '',
      content: [],
    } as PageModel));
  }

  deletePage(pageId: string): void {
    this.store.dispatch(new DeletePageAction(pageId));
  }
}

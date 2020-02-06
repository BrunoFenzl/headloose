import { DynamicPageSchema } from 'src/dynamic-renderer/dynamic-components.interfaces';
import { LoadPageAction, AddPageAction, UpdatePageAction, DeletePageAction, ContentState } from '../content/store';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';

@Injectable()
export class PageService {

  constructor(
    private store: Store<ContentState>
  ) { }

  loadPage(pageId: string): void {
    this.store.dispatch(new LoadPageAction(pageId));
  }

  addPage(page: DynamicPageSchema): void {
    this.store.dispatch(new AddPageAction(page));
  }

  updatePage(page: DynamicPageSchema): void {
    this.store.dispatch(new UpdatePageAction(page));
  }

  changePageOrder(pageId: string, oldIndex: number, newIndex: number): void {

  }

  deletePage(pageId: string): void {
    if (window.confirm('Are you sure? This can not be undone!')) {
      this.store.dispatch(new DeletePageAction(pageId));
    }
  }
}

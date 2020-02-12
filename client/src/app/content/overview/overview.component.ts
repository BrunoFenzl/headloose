import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ContentState } from 'src/app/content/store/models/content.model';
import { Observable } from 'rxjs';
import { PageDefaults } from '../store/models/pages.model';
import { LoadPagesAction, AddPageAction, DeletePageAction, getPagesArray } from '../store';
import { DynamicPageSchema } from 'src/dynamic-renderer/dynamic-components.interfaces';
import { PageService } from 'src/app/services/page.service';


@Component({
  selector: 'app-pages',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  public state$: Observable<DynamicPageSchema[]>;

  constructor(
    private store: Store<ContentState>,
    private pageService: PageService
  ) {
  }

  ngOnInit(): void {
    this.state$ = this.store.select(getPagesArray);
    this.store.dispatch(new LoadPagesAction());
  }

  addPage(): void {
    this.pageService.addPage(new PageDefaults({}));
  }

  updatePage(page: DynamicPageSchema): void {
    this.pageService.updatePage(page);
  }

  deletePage(pageId: string): void {
    this.pageService.deletePage(pageId);
  }
}

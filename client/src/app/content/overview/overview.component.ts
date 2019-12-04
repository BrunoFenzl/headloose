import { Component, OnInit } from '@angular/core';
// import { StateManagerService } from 'src/app/state-manager.service';
import { Router } from '@angular/router';
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
    private router: Router,
  ) { }

  ngOnInit() {
    this.state$ = this.store.select(store => store.pages.data);
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

  editPage(id: number): void {
    this.router.navigate(['pages', id]);
  }

}

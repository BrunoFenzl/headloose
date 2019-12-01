import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
// import { StateManagerService } from './state-manager.service';
import { AppState } from './content/store/models/app-state.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoadPagesAction } from './content/store/actions/pages.actions';
import { Page } from './content/store/models/pages.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  pages$: Observable<Array<Page>>;

  constructor(
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.pages$ = this.store.select(store => store.pages.list);
    this.store.dispatch(new LoadPagesAction());
  }
}

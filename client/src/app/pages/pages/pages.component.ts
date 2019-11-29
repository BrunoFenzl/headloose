import { Component, OnInit } from '@angular/core';
// import { StateManagerService } from 'src/app/state-manager.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/models/app-state.model';
import { Observable } from 'rxjs';
import { Pages } from 'src/app/store/reducers/pages.reducer';
import { Page } from 'src/app/store/models/pages.model';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  private state$: Observable<Array<Page>>;

  constructor(
    private store: Store<AppState>,
    private router: Router,
  ) {}

  ngOnInit() {
    this.state$ = this.store.select(store => store.pages.list);
    console.log('state', this.state$);
  }

  editPage(id: number): void {
    this.router.navigate(['pages', id]);
  }

}

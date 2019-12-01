import { Component, OnInit } from '@angular/core';
// import { StateManagerService } from 'src/app/state-manager.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/content/store/models/app-state.model';
import { Observable } from 'rxjs';
import { Pages } from 'src/app/content/store/reducers/pages.reducer';
import { Page } from 'src/app/content/store/models/pages.model';

@Component({
  selector: 'app-pages',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
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

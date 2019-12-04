import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
// import { StateManagerService } from './state-manager.service';
import { ContentState } from './content/store/models/content.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoadPagesAction } from './content/store/actions/pages.actions';
import { PageModel } from './content/store/models/pages.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  pages$: Observable<Array<PageModel>>;

  constructor(
    private store: Store<ContentState>
  ) { }

  ngOnInit() {
    // this.pages$ = this.store.select(store => store.pages.data);
    // this.store.dispatch(new LoadPagesAction());
  }
}

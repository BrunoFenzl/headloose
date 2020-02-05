import { Component, OnInit } from '@angular/core';
import { ContentState } from './content/store/models/content.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoadPagesAction } from './content/store/actions/content.actions';
import { DynamicPageSchema } from 'src/dynamic-renderer/dynamic-components.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  pages$: Observable<Array<DynamicPageSchema>>;

  constructor(
    private store: Store<ContentState>
  ) { }

  ngOnInit() {
  }
}

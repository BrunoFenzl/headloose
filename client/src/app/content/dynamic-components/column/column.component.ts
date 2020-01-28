import { Component, OnInit } from '@angular/core';
import { ContentState, getComponentChildren } from '../../store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DynamicComponentSchema } from 'src/dynamic-renderer/dynamic-components.interfaces';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {

  public children$: Observable<DynamicComponentSchema[]>;

  public id: string;

  constructor(
    public store: Store<ContentState>,
  ) { }

  ngOnInit() {
    this.children$ = this.store.select(getComponentChildren, { id: this.id });
  }
}

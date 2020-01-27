import { Component, OnInit } from '@angular/core';
import { ContentState, SelectComponentAction, DeleteComponentAction } from '../../store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {

  public id: string;

  constructor(
    public store: Store<ContentState>,
  ) { }

  ngOnInit() {
  }

  selectComponent(): void {
    this.store.dispatch(new SelectComponentAction(this.id));
  }

  deleteComponent(): void {
    this.store.dispatch(new DeleteComponentAction(this.id));
  }
}

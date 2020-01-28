import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ContentState, SelectComponentAction, DeleteComponentAction } from '../store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-component-options',
  templateUrl: './component-options.component.html',
  styleUrls: ['./component-options.component.scss']
})
export class ComponentOptionsComponent implements OnInit {

  @Input()
  targetId: string;

  constructor(
    public store: Store<ContentState>,
  ) { }

  ngOnInit() { }

  editClick(): void {
    this.store.dispatch(new SelectComponentAction(this.targetId));
  }

  deleteClick(): void {
    this.store.dispatch(new DeleteComponentAction(this.targetId));
  }
}

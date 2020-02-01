import { Component, OnInit, Input } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { DynamicComponentSchema } from 'src/dynamic-renderer/dynamic-components.interfaces';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ContentState, getComponentChildren } from '../../store';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit {

  public children$: Observable<DynamicComponentSchema[]>;

  public id: string;

  constructor(
    public store: Store<ContentState>,
    public readonly formGroupDirective: FormGroupDirective
  ) { }

  ngOnInit() {
    this.children$ = this.store.select(getComponentChildren, { id: this.id });
  }
}

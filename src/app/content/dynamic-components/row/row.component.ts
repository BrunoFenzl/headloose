import { Component, OnInit, Input } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { DynamicComponentSchema } from 'src/dynamic-renderer/dynamic-components.interfaces';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ContentState, getComponentChildren } from '../../store';
import { PageService } from 'src/app/services/page.service';
import { ColumnDefaults } from '../column';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit {

  public children$: Observable<DynamicComponentSchema[]>;

  public id: string;

  constructor(
    private store: Store<ContentState>,
    private pageService: PageService,
  ) { }

  ngOnInit() {
    this.children$ = this.store.select(getComponentChildren, { id: this.id });
  }

  addColumn(): void {
    this.pageService.addComponent(new ColumnDefaults(), this.id);
  }
}

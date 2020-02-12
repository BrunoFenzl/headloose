import { Component, OnInit } from '@angular/core';
import { ContentState, getComponentChildren, SelectComponentAction } from '../../store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DynamicComponentSchema } from 'src/dynamic-renderer/dynamic-components.interfaces';
import { ModalService } from '../../../modal/modal.service';
import { ComponentsListComponent } from '../../components-list/components-list.component';

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
    private modalService: ModalService,
  ) { }

  ngOnInit() {
    this.children$ = this.store.select(getComponentChildren, { id: this.id });
  }

  public addComponent(): void {
    // Set this component as the current active so the new
    // generated component will be aded as child of this one
    this.store.dispatch(new SelectComponentAction(this.id));
    // Request the modal to open with a list of all available components
    this.modalService.open({ component: ComponentsListComponent });
  }
}

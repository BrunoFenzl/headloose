import { Component, Input, HostListener, ElementRef } from '@angular/core';
import { ContentState, SelectComponentAction, DeleteComponentAction } from '../store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-component-options',
  templateUrl: './component-options.component.html',
  styleUrls: ['./component-options.component.scss']
})
export class ComponentOptionsComponent {

  @Input()
  targetId: string;

  @HostListener('mouseenter')
  onEnter(): void {
    this.element.nativeElement.classList.add('is-visible');
  }

  @HostListener('mouseleave')
  onLeave(): void {
    this.element.nativeElement.classList.remove('is-visible');
  }


  constructor(
    public store: Store<ContentState>,
    private element: ElementRef,
  ) { }

  editClick(): void {
    this.store.dispatch(new SelectComponentAction(this.targetId));
  }

  deleteClick(): void {
    this.store.dispatch(new DeleteComponentAction(this.targetId));
  }
}

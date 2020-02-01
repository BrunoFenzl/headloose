import { Component, Input, HostListener, ElementRef } from '@angular/core';
import { ContentState, SelectComponentAction, DeleteComponentAction } from '../store';
import { Store } from '@ngrx/store';
import { ModalService } from 'src/app/modal/modal.service';
import { OptionsRendererComponent } from '../options-renderer/options-renderer.component';

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
    private modalService: ModalService,
  ) { }

  editClick(): void {
    this.store.dispatch(new SelectComponentAction(this.targetId));
    this.modalService.open({ component: OptionsRendererComponent });
  }

  deleteClick(): void {
    if (window.confirm('Are you sure? This can not be undone.')) {
      this.store.dispatch(new DeleteComponentAction(this.targetId));
    }
  }
}

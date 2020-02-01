import { Component, OnInit, Inject, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentFactory, ComponentRef } from '@angular/core';
import { ModalOverlayRef } from './modal-overlayref';
import { MODAL_COMPONENT_TOKEN } from './modal.token';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @ViewChild('contentContainer', { read: ViewContainerRef, static: true })
  public container: ViewContainerRef;

  public componentRef: ComponentRef<any>;

  constructor(
    public dialogRef: ModalOverlayRef,
    @Inject(MODAL_COMPONENT_TOKEN) public component: any,
    private resolver: ComponentFactoryResolver,
  ) { }

  ngOnInit() {
    this.container.clear();
    const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(this.component);
    this.componentRef = this.container.createComponent(factory);
    console.log('modalContent', this.componentRef);
  }
}

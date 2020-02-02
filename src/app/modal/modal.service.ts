import { Injectable, Injector, ComponentRef } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector, ComponentType } from '@angular/cdk/portal';
import { ModalComponent } from './modal.component';
import { ModalModel } from './modal.model';
import { ModalOverlayRef } from './modal-overlayref';
import { MODAL_COMPONENT_TOKEN } from './modal.token';

const DEFAULTS: ModalModel = {
  hasBackdrop: true,
  backdropClass: 'dark-backdrop',
  panelClass: 'modal__panel',
  component: null,
};

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(
    private overlay: Overlay,
    private injector: Injector,
  ) { }

  public open(options: ModalModel = {}): any {
    // override defaults
    const modalOptions = { ...DEFAULTS, ...options };
    // Return an OverlayRef which is a PortalHost
    const overlayRef = this.createOverlay(modalOptions);
    // remote control to close the modal from somwhere else
    const dialogRef = new ModalOverlayRef(overlayRef);

    this.attachDialogContainer(overlayRef, modalOptions, dialogRef);

    // subscribe to clicks on backdrop to close it
    overlayRef.backdropClick().subscribe(() => dialogRef.close());

    // Create a ComponentPortal that can be attached to PortalHost
    // const portal = new ComponentPortal(ModalComponent);

    // overlayRef.attach(portal);

    return dialogRef;
  }

  private createOverlay(options: ModalModel): OverlayRef {
    const modalOptions = this.getModalOptions(options);

    return this.overlay.create(modalOptions);
  }

  private getModalOptions(options: ModalModel): ModalModel {
    const positionStrategy = this.overlay.position()
      .global()
      .centerHorizontally()
      .centerVertically();

    return {
      hasBackdrop: options.hasBackdrop,
      backdropClass: options.backdropClass,
      panelClass: options.panelClass,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy,
    };
  }

  private createInjector(component: ModalModel, dialogRef: ModalOverlayRef): PortalInjector {
    const injectionTokens = new WeakMap();

    injectionTokens.set(ModalOverlayRef, dialogRef);
    injectionTokens.set(MODAL_COMPONENT_TOKEN, component);

    return new PortalInjector(this.injector, injectionTokens);
  }

  private attachDialogContainer(overlayRef: OverlayRef, options: ModalModel, dialogRef: ModalOverlayRef) {
    const injector = this.createInjector(options.component, dialogRef);
    const containerPortal = new ComponentPortal(ModalComponent, null, injector);
    const containerRef: ComponentRef<ModalComponent> = overlayRef.attach(containerPortal);

    return containerRef.instance;
  }
}

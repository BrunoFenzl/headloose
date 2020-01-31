import { OverlayRef } from '@angular/cdk/overlay';

export class ModalOverlayRef {
  constructor(private overlayRef: OverlayRef) { }

  public close(): void {
    this.overlayRef.dispose();
  }
}

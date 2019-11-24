import { Injectable, ErrorHandler } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable()
export class DynamicErrorService implements ErrorHandler {

  /**
   * Error events
   */
  public readonly errorEvents: Subject<Error> = new Subject<Error>();

  constructor() {
    this.errorEvents = new Subject<Error>();
  }

  /**
   * Handle Error
   * @param error Error
   */
  public handleError(error: Error): void {
    this.errorEvents.next(error);
  }
}

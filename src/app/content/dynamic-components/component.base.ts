import { Input, HostBinding, HostListener, Directive } from '@angular/core';

/**
 * Base class for all dynamic form components
 */
@Directive()
export class ComponentBase {
  /**
   * Disable flag
   */
  @Input()
  @HostBinding('class.is-disabled')
  public disabled: boolean;

  /**
   * Readonly flag
   */
  @Input()
  @HostBinding('class.is-readonly')
  public readonly: boolean;

  constructor() {
    this.disabled = false;
    this.readonly = false;
  }

  /**
   * Unique id of this component. Will be expected by the respective componentFactories
   */
  public id: string;

  /**
   * Intercepts all click events and prevent them if the component is disabled
   * @param event - Event
   */
  @HostListener('click', ['$event'])
  public onClick(event: Event): boolean {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      return false;
    }

    return true;
  }

  /**
   * Intercepts keyboard event when the keycode is 8 (backspace) and stops it if the component is readonly
   * This prevents the browserback action on a readonly element.
   * Inspired by https://stackoverflow.com/questions/1495219/how-can-i-prevent-the-backspace-key-from-navigating-back
   * @param event - Event
   */
  @HostListener('keydown', ['$event'])
  public onKeyDown(event: Event) {
    const keyCode = 'keyCode';
    if (this.readonly && event[keyCode] === 8) {
      event.preventDefault();
    }
  }
}

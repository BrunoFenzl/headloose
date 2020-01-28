import { ControlValueAccessor } from '@angular/forms';
import { Input, Output, EventEmitter, ChangeDetectorRef, ViewRef } from '@angular/core';
import { ComponentBase } from './component.base';

export class FormComponentBase<T> extends ComponentBase implements ControlValueAccessor {

  @Input()
  public set model(value: T) {
    this.setInternalModel(value, true, false, true);
    this.propagateTouched(this.internalModel);
  }
  public get model(): T {
    return this.internalModel;
  }

  /**
   * Value change emitter, emitting the new value of the model
   */
  @Output()
  public readonly modelChange: EventEmitter<T>;

  /**
   * Funtion to be called on change events
   */
  public propagateChange: (value: T) => void;

  /**
   * Funtion to be called on touch events
   */
  public propagateTouched: (value: T) => void;

  /**
   * Internal model
   */
  public internalModel: T;

  /**
   * Change detector
   */
  protected readonly changeDetector: ChangeDetectorRef;

  constructor(changeDetector: ChangeDetectorRef) {
    super();

    this.propagateChange = (value: T): void => { }; // Not implemented yet
    this.propagateTouched = (value: T): void => { }; // Not implemented yet

    this.modelChange = new EventEmitter<T>();
    this.changeDetector = changeDetector;
  }

  /**
   * Write the value to the form component
   * @param value - component's value
   */
  writeValue(value: any): void {
    this.setInternalModel(value, true, true, false);
  }

  registerOnChange(onChangeCallback: (value: any) => void): void {
    this.propagateChange = onChangeCallback;
  }

  registerOnTouched(onTouchedCallback: (value: any) => void): void {
    this.propagateTouched = onTouchedCallback;
  }

  setDisabledState(isDisabed: boolean): void {
    this.disabled = isDisabled;
    this.triggerChangeDetection();
  }

  protected setInternalModel(value: T, doRender: boolean, emitEvent: boolean, emitChange: boolean): void {
    const normalizedValue: T = this.doNormalize(value);

    if (normalizedValue !== this.internalModel) {
      this.internalModel = normalizedValue;
    }

    if (doRender) {
      this.doRender(normalizedValue, false);
    }

    if (emitChange) {
      this.propagateChange(normalizedValue);
    }

    this.triggerChangeDetection();
  }

  /**
   * Usually, rendering happens by simple Angular data binding. In special cases however, this won't work properly.
   * For those cases components extending from this class can provide an addition / alternative way of rendering
   * things by overwriting this method. The custom rendering will happen during model updates, specially in 'setInternalModel()'.
   * Usually, componentswill need to inject the Angular renderer service for implementing custom rendering.
   * @param value - value to render
   * @param setCursor - flag, for cursor position
   */
  protected doRender(value: T, setCursor?: boolean): void {
    // to be overriden
  }

  /**
   * If necessary, components can decide to normalize the model when it gets updated. For example,
   * most often values such 'null' or 'undefined' might lead to issues later on. In these cases, the value could
   * be normalized to an empty string or soe other default value.
   *
   * @param value - value to be normalized
   */
  protected doNormalize(value: T): T {
    // to be overriden
    return value;
  }

  /**
   * Rund change detection.
   * Note: The change detection will only be triggered if the component (and thus the view) has not yeet been destroyed.
   */
  private triggerChangeDetection(): void {
    if (!(this.changeDetector as ViewRef).destroyed) {
      this.changeDetector.detectChanges();
    }
  }
}

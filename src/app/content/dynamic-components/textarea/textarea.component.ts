import { Component, OnInit, Input, forwardRef, ChangeDetectorRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormComponentBase } from '../form-component.base';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaComponent),
      multi: true,
    }
  ]
})
export class TextareaComponent extends FormComponentBase<string> implements OnInit {

  @Input()
  name: string;

  @Input()
  label: string;

  @Input()
  required: boolean;

  @Input()
  disabled: boolean;

  @Input()
  readonly: boolean;

  @Input()
  maxlength: number;

  @Input()
  minlength: number;

  @Input()
  size: number;

  @Input()
  placeholder: string;

  @Input()
  model: string;

  public id: string;

  constructor(changeDetector: ChangeDetectorRef) {
    super(changeDetector);
  }

  ngOnInit() {
    this.internalModel = this.model;
  }

  valueChange(evt) {
    console.log('textarea value change:', evt.target.value);
    this.setInternalModel(evt.target.value, false, true, true);
  }

}

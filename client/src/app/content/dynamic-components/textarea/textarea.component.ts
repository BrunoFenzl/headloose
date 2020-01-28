import { Component, OnInit, Input, forwardRef } from '@angular/core';
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
export class TextareaComponent extends FormComponentBase implements OnInit {

  @Input()
  name: string;

  @Input()
  model: string;

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

  public id: string;

  constructor() {
    super();
  }

  ngOnInit() {
    this.internalModel = this.model;
  }

  onValueChange(evt) {
    console.log('textarea value change:', evt);
    this.onModelChange(evt.value);
    this.onTouch();
  }

}

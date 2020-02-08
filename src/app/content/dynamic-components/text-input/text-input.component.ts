import { Component, OnInit, Input, ChangeDetectorRef, forwardRef } from '@angular/core';
import { FormComponentBase } from '../form-component.base';
import { ContentState } from '../../store';
import { Store } from '@ngrx/store';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextInputComponent),
      multi: true,
    }
  ]
})
export class TextInputComponent extends FormComponentBase<string> implements OnInit {

  @Input()
  label: string;

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

  constructor(
    changeDetector: ChangeDetectorRef
  ) {
    super(changeDetector);
  }

  ngOnInit() {
    this.internalModel = this.model;
  }

  valueChange(evt) {
    this.setInternalModel(evt.target.value, false, true, true);
  }
}

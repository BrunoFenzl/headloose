import { Component, OnInit, Input, ChangeDetectorRef, forwardRef } from '@angular/core';
import { FormComponentBase } from '../form-component.base';
import { ContentState } from '../../store';
import { Store } from '@ngrx/store';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NumberInputComponent),
      multi: true,
    }
  ]
})
export class NumberInputComponent extends FormComponentBase<string> implements OnInit {

  @Input()
  name: string;

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
    public store: Store<ContentState>,
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

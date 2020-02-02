import { Component, OnInit, Input, ChangeDetectorRef, forwardRef } from '@angular/core';
import { SelectOption } from './select.schema';
import { FormComponentBase } from '../form-component.base';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    }
  ]
})
export class SelectComponent extends FormComponentBase<any> implements OnInit {

  @Input()
  name: string;

  @Input()
  model: string;

  @Input()
  required: boolean;

  @Input()
  disabled: boolean;

  public options: SelectOption[];

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

import { Component, forwardRef, ChangeDetectorRef, Input } from '@angular/core';
import { FormComponentBase } from '../form-component.base';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SwitchComponent),
      multi: true,
    }
  ]
})
export class SwitchComponent extends FormComponentBase<boolean> {

  @Input()
  name: string;

  @Input()
  required: boolean;

  @Input()
  disabled: boolean;

  constructor(changeDetector: ChangeDetectorRef) {
    super(changeDetector);
    this.internalModel = false;
  }

  public onCheckboxClick(event): void {
    event.stopPropagation(); // Prevent the click event from firing twice
  }

  public valueChange(evt): void {
    this.setInternalModel(!this.internalModel, false, true, true);
  }
}

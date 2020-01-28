import { Component, forwardRef, ChangeDetectorRef } from '@angular/core';
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

  public id: string;

  constructor(changeDetector: ChangeDetectorRef) {
    super(changeDetector);

    this.internalModel = false;
  }

  public onCheckboxClick(event): void {
    event.stopPropagation(); // Prevent the click event from firing twice
  }

  public onCheckboxChange(): void {
    this.setInternalModel(!this.internalModel, false, true, true);
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { SelectOption } from './select.schema';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input()
  name: string;

  @Input()
  model: string;

  @Input()
  required: boolean;

  @Input()
  disabled: boolean;

  @Input()
  size: number;

  public id: string;

  public options: SelectOption[];

  constructor() { }

  ngOnInit() {
    console.log('input', this);
  }

  onValueChange(evt) {
    console.log('input value change:', evt);
  }
}

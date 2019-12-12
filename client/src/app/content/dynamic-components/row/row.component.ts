import { Component, OnInit, Input } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { DynamicComponentSchema } from 'src/dynamic-renderer/dynamic-components.interfaces';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit {

  @Input()
  public children: Array<DynamicComponentSchema>;

  public id: string;

  constructor(
    public readonly formGroupDirective: FormGroupDirective
  ) {

  }

  ngOnInit() {

  }

}

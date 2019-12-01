import { Component, OnInit } from '@angular/core';
import { DynamicFormComponentSchema } from '../../../dynamic-renderer/dynamic-components.interfaces';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  public form: FormGroup;
  public controlsFormSchema: DynamicFormComponentSchema[];

  constructor() {
    this.form = new FormGroup({});
    this.controlsFormSchema = [
      // {
      //   '@id': 'test',
      //   '@type': 'Headline',
      //   title: 'Hello ',
      //   size: 'h1',
      // },
      // {
      //   '@id': 'test',
      //   '@type': 'Headline',
      //   title: 'World!',
      //   size: 'h3',
      // },
      // {
      //   '@id': 'btn1',
      //   '@type': 'Button',
      //   content: 'click me!!',
      //   size: 'btn-lg',
      //   disabled: false,
      // },
    ];
  }

  ngOnInit() {
  }

}

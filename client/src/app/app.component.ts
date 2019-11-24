import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DynamicFormComponentSchema } from './dynamic-renderer/dynamic-components.interfaces';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public form: FormGroup;

  public controlsFormSchema: DynamicFormComponentSchema[];

  constructor(
    private cd: ChangeDetectorRef,
  ) {
    this.form = new FormGroup({});
    this.controlsFormSchema = [
      {
        '@id': 'test',
        '@type': 'Headline',
        title: 'Hello ',
        size: 'h1',
      },
      {
        '@id': 'test',
        '@type': 'Headline',
        title: 'World!',
        size: 'h3',
      },
    ];
  }

  ngOnInit() {}
}

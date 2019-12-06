import { Component, OnInit } from '@angular/core';
import { DynamicFormComponentSchema } from '../../../dynamic-renderer/dynamic-components.interfaces';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ContentState, PageModel, getSelectedPage } from '../store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  public page$: Observable<PageModel>;
  public form: FormGroup;
  public controlsFormSchema: DynamicFormComponentSchema[];

  constructor(
    private store: Store<ContentState>
  ) {

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
    this.page$ = this.store.select(getSelectedPage);
  }

}

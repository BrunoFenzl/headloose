import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ContentState, getSelectedPageContent } from '../store';
import { Observable } from 'rxjs';
import { DynamicComponentSchema } from 'src/dynamic-renderer/dynamic-components.interfaces';

@Component({
  selector: 'app-options-renderer',
  templateUrl: './options-renderer.component.html',
  styleUrls: ['./options-renderer.component.scss']
})
export class OptionsRendererComponent implements OnInit {

  public content$: Observable<DynamicComponentSchema[]>;
  public form: FormGroup;

  constructor(
    private store: Store<ContentState>
  ) {
    this.form = new FormGroup({});
  }

  ngOnInit() {
    // this.content$ = this.store.select(getSelectedPageContent);
  }

}

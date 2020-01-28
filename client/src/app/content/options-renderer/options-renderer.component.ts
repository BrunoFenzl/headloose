import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ContentState, getActiveComponent } from '../store';
import { Observable } from 'rxjs';
import { DynamicComponentSchema } from 'src/dynamic-renderer/dynamic-components.interfaces';
import { SchemaGeneratorService } from 'src/app/content/dynamic-components/schema-generator.service';
import { FormControl, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-options-renderer',
  templateUrl: './options-renderer.component.html',
  styleUrls: ['./options-renderer.component.scss']
})
export class OptionsRendererComponent implements OnInit {

  public content$: Observable<DynamicComponentSchema>;
  public form: FormGroup;
  public formSchema: DynamicComponentSchema[];

  constructor(
    private store: Store<ContentState>,
    private schemaGenerator: SchemaGeneratorService,
  ) {
    this.form = new FormGroup({});
  }

  ngOnInit() {
    this.content$ = this.store.select(getActiveComponent);
    this.content$.subscribe((r) => {
      if (r) {
        this.formSchema = this.schemaGenerator.generateFieldsfromSchema(r);
      }
    });
  }
}

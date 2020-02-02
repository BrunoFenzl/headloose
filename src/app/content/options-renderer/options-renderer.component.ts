import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ContentState, getActiveComponent, UpdateComponentAction } from '../store';
import { Observable, Subscription, interval, timer } from 'rxjs';
import { DynamicComponentSchema } from 'src/dynamic-renderer/dynamic-components.interfaces';
import { SchemaGeneratorService } from 'src/app/content/dynamic-components/schema-generator.service';
import { zip, concatAll, distinctUntilChanged, throttle, debounce, distinct, distinctUntilKeyChanged, filter } from 'rxjs/operators';

@Component({
  selector: 'app-options-renderer',
  templateUrl: './options-renderer.component.html',
  styleUrls: ['./options-renderer.component.scss']
})
export class OptionsRendererComponent implements OnInit {

  public content$: Observable<DynamicComponentSchema>;
  public form: FormGroup;
  public formSchema: DynamicComponentSchema[];
  public changed$: Subscription;

  constructor(
    private store: Store<ContentState>,
    private schemaGenerator: SchemaGeneratorService,
  ) {
    this.form = new FormGroup({});
    this.changed$ = this.form.valueChanges
      .pipe(
        debounce(() => timer(1)),
        distinctUntilChanged((prev, curr) => JSON.stringify(prev) === JSON.stringify(curr))
      )
      .subscribe((v) => {
        const b = this.schemaGenerator.generateSchemaFromFields(v);
        // console.log(b);
        this.store.dispatch(new UpdateComponentAction(b));
      });
  }

  ngOnInit() {
    this.content$ = this.store.select(getActiveComponent);
    this.content$.subscribe((r) => {
      if (r) {
        // console.log('r', r);
        this.formSchema = this.schemaGenerator.generateFieldsfromSchema(r);
      }
    });
  }
}

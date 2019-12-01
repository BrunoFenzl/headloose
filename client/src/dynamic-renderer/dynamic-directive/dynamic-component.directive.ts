import {
  Directive,
  OnInit,
  OnDestroy,
  DoCheck,
  Input,
  Output,
  EventEmitter,
  ComponentRef,
  ViewContainerRef,
  Injector,
  Renderer2,
  ChangeDetectorRef
} from '@angular/core';
import { Subject, of } from 'rxjs';
import { distinctUntilChanged, merge, takeUntil } from 'rxjs/operators';
import {
  FormControl,
  FormControlName,
  NgControlStatus,
  FormGroupDirective
} from '@angular/forms';
import { DynamicComponentRegistryService } from '../dynamic-component/dynamic-component-registry/dynamic-component-registry.service';
import {
  DynamicComponentSchema,
  DynamicFormValue,
  DynamicFormComponentSchema
} from '../dynamic-components.interfaces';
import { formControlStatus } from '../form-control-status.constants';

@Directive({
  selector: '[dynamicComponent]'
})
export class DynamicComponentDirective implements OnInit, OnDestroy, DoCheck {
  /**
   * Component schema
   */
  @Input('dynamicComponent')
  public get schema(): DynamicFormComponentSchema | null {
    return this.internalSchema;
  }

  public set schema(schema: DynamicFormComponentSchema | null) {
    // update schema
    // Note: We only update the schema if it is not null so that we keep the schema itself (and iformation such as @id)
    this.internalSchema = schema || this.internalSchema;

    // exit early if the component is still in the initial startup phase
    if (!this.isInitialized) {
      return;
    }

    // Always destroy component
    this.destroy();

    // Re-create the component if the new schema is not null, else reset the form state
    if (schema) {
      this.create();
    } else {
      this.formControl = null;
    }
  }

  /**
   * Component value
   */
  @Input()
  public get value(): DynamicFormValue {
    // Ue the existing value, or null if none exists
    return !!this.formControl ? this.formControl.value : null;
  }

  public set value(value: DynamicFormValue) {
    if (this.formControl) {
      this.formControl.patchValue(value);
    }
  }

  /**
   * Value change event
   */
  @Output()
  public valueChange: EventEmitter<DynamicFormValue>;

  /**
   * Is this a from component?
   */
  public isFormComponent: boolean;

  /**
   * Does this component has validation rules?
   */
  public hasValidationRules: boolean;

  /**
   * Does this directive exist or is it active?
   */
  public doesExist: boolean;

  /**
   * Component lifecycle complete
   */
  public readonly componentLifeCycleComplete: Subject<void>;

  /**
   * Internal component schema (controlled by getter & setter)
   */
  private internalSchema: DynamicFormComponentSchema | null;

  /**
   * Component reference
   */
  private component: ComponentRef<any> | null;

  /**
   * Validation error component reference (including instance, location…)
   */
  // private validationErrorsComponent: ComponentRef<ValidationErrorsComponent> | null;

  /**
   * Form control instance (Angular reactive forms class)
   */
  private formControl: FormControl | null;

  /**
   * Form control name instance (Angular reactive forms directive)
   */
  private formControlName: FormControlName | null;

  /**
   * Form control status instace (Angular ractive forms directive)
   */
  private formControlStatus: NgControlStatus | null;

  /**
   * Is this component already initialized?
   */
  private isInitialized: boolean;

  /**
   *
   * @param formGroupDirective - Frst parent in the view DI hierarchy
   * @param dynamicComponentRegistryService - Dynamic component service
   * @param viewContainerRef - View container reference (this directive sits on)
   * @param injector - Injector
   * @param renderer - Renderer
   * @param changeDetector - Change detector
   */
  constructor(
    private readonly formGroupDirective: FormGroupDirective,
    private readonly dynamicComponentRegistryService: DynamicComponentRegistryService,
    private readonly viewContainerRef: ViewContainerRef,
    private readonly injector: Injector,
    private readonly renderer: Renderer2,
    private readonly changeDetector: ChangeDetectorRef
  ) {
    this.valueChange = new EventEmitter<DynamicFormValue>();
    this.isFormComponent = false;
    this.hasValidationRules = false;
    this.doesExist = true;
    this.componentLifeCycleComplete = new Subject<void>();
    this.internalSchema = null;
    this.component = null;
    // this.validationErrorsComponent = null;
    this.formControl = null;
    this.formControlName = null;
    this.formControlStatus = null;
    this.isInitialized = false;
  }

  /**
   * On Init lifecycle hook
   */
  public ngOnInit(): void {
    this.isInitialized = true;
    this.schema = this.schema; // render component initially
  }

  /**
   * On Destroy lifecycle hook
   */
  public ngOnDestroy(): void {
    this.schema = null;
  }

  public ngDoCheck(): void {
    if (this.doesExist && this.component && this.isFormComponent) {
      this.applyFormStateClasses();
    }
  }

  private create(): void {
    this.doesExist = true;

    // create and render component
    this.createAndRenderComponent();
    this.isFormComponent = this.dynamicComponentRegistryService.isFormComponent(
      this.component
    );
    this.hasValidationRules =
      this.schema.validation && this.schema.validation.length > 0;

    // If the component is a form component, connect the component to the overall form and setup validation rules
    if (this.isFormComponent) {
      this.setupFormConnection();
      this.setupFormValidation();
    }

    // Final change detection run
    this.changeDetector.detectChanges();
  }

  private destroy(): void {
    this.doesExist = false;

    // Remove form control && from control name directives
    if (this.isFormComponent) {
      this.formGroupDirective.control.removeControl(this.schema['@id']);
      this.formControlName.ngOnDestroy(); // Emulate the lifecycle eding for the programmatically instatiated directive
    }

    // Destroy and remove components
    this.destroyAndRemoveComponent();
    // this.destroyAndRemoveValidationErrorsComponent();
  }

  /**
   * Create (instantiate, configure) and render the component
   */
  private createAndRenderComponent(): void {
    this.component = this.dynamicComponentRegistryService.createComponent(
      this.schema,
      this.injector
    );
    this.viewContainerRef.insert(this.component.hostView); // multiple viewContainerRef insert() are possible
  }

  /**
   * Destroy and remove the component
   */
  private destroyAndRemoveComponent(): void {
    if (!this.component) {
      return;
    }
    this.dynamicComponentRegistryService.destroyComponent(this.component);
  }

  /**
   * Create (instatntiate, configure) and render the validation error component, right next to our existing component
   */
  // private createAndRenderValidationErrorComponent(): void {
  //   const validationErrorSchema: DynamicComponentSchema = {
  //     '@id': null,
  //     '@type': 'CompValidationError',
  //     name: this.schema['@id'],
  //     validators: this.schema.validation,
  //   };
  //   this.validationErrorsComponent = this.dynamicComponentRegistryService.createComponent(validationErrorSchema, this.injector);
  //   this.viewContainerRef.insert(this.validationErrorsComponent.hostView); // multiple viewContainerRef insert() calls are possible
  // }

  /**
   * Destroy and remove the validation errors component
   */
  // private destroyAndRemoveValidationErrorsComponent(): void {
  //   if (!this.validationErrorsComponent) {
  //     return;
  //   }
  //   this.dynamicComponentRegistryService.destroyComponent(this.validationErrorsComponent);
  // }

  /**
   * Connect our form component to the overall form
   */
  private setupFormConnection(): void {
    // Create and configure form control
    // Note: We Re-use an existing form control to keep existing form state (value, disabled, validity, dirty / touched)
    if (!this.formControl) {
      this.formControl = new FormControl();
      this.formControl.setValue(
        this.schema.hasOwnProperty('initialModel')
          ? this.schema.initialModel
          : this.component.instance.model
      );
    }

    // Apply disabled state (if it changed)
    if (
      this.schema.hasOwnProperty('disabled') &&
      this.schema.disabled &&
      this.formControl.enabled
    ) {
      this.formControl.disable();
    } else if (
      (!this.schema.hasOwnProperty('disabled') || !this.schema.disabled) &&
      this.formControl.disabled
    ) {
      this.formControl.enable();
    }

    // Connect form control to parent form
    this.formGroupDirective.control.addControl(
      this.schema['@id'],
      this.formControl
    );

    // Setup form control name corresponding to the form control instance
    // Instead of applying a directive dynamically (which is not possible), we instantiate the directive manually
    this.formControlName = new FormControlName(
      this.formGroupDirective,
      null,
      null,
      [this.component.instance],
      'always'
    );
    this.formControlName.name = this.schema['@id'];
    this.formControlName.ngOnChanges({}); // Lifecycle hook must be called once on init

    // Add 'fake' formControlName attribute (so that other things, like the scroll service , continue to work properly)
    this.renderer.setAttribute(
      this.component.location.nativeElement,
      'formControlName',
      this.schema['@id']
    );

    // Setup form control status corresponding to the form control name instance
    // Instead of applying a directive dynamically (which is not possible), we instantiate the directive manually
    this.formControlStatus = new NgControlStatus(this.formControlName);

    // Update value, emit valueChange
    of(this.formControl.value) // Initia form control value
      .pipe(
        // TODO: Update merge() as stated in deprecation notice
        merge(this.formControl.valueChanges),
        distinctUntilChanged(), // Throw away values that do no represent value change (thus also preventing an infinite loop)
        takeUntil(this.componentLifeCycleComplete) // Cleanup subscrition when the directive gets destroyed
      )
      .subscribe((value: DynamicFormValue): void => {
        this.value = value;
        this.valueChange.emit(value);
      });
  }

  /**
   * Setup all from validation rules for out form component
   */
  private setupFormValidation(): void {
    // Set or clear validation rules
    if (this.hasValidationRules) {
      // // Set (or override) validation rules
      // this.formControl.setValidators(
      //   ValidatorsUtil.chain(
      //     this.schema.validation
      //       .map(
      //         (validationObject: ValidationErrorSchema): ValidatorFn => {
      //           return Validator[validationObject.rule] ( // Validator Rule
      //             ...validationObject(validationObject.parameters || []), // Validator parameters
      //           );
      //         }
      //       ),
      //   )
      // );
      // this.createAndRenderValidationErrorComponent();
    } else {
      this.formControl.updateValueAndValidity();
    }
  }

  /**
   * Apply (Angular) form state classes (e.g. 'ng-valid' or 'ng-dirty')
   */
  private applyFormStateClasses(): void {
    Object.keys(formControlStatus).forEach((className: string): void => {
      if (this.formControlStatus[formControlStatus[className]]) {
        this.renderer.addClass(
          this.component.location.nativeElement,
          className
        );
      } else {
        this.renderer.removeClass(
          this.component.location.nativeElement,
          className
        );
      }
    });
  }
}

import { FormGroup, AbstractControl } from '@angular/forms';

export class DynamicFormGroupFlat extends FormGroup {
  constructor(
    public controls: { [key: string]: AbstractControl }
  ) {
    super(controls);
  }

  /**
   * Get form control by path
   * @param path - Path
   * @returns FormControl
   */
  public get(path: Array<string | number> | string): AbstractControl | null {
    // Make sure the path is always an array, sothat Angular will no rely on dot-separated paths.
    // This way, we can use dot-separated form control names without an actual parent-child relationship.
    // https://github.com/angular/angular/blob/master/packages/forms/src/model.ts#L47
    return super.get(
      Array.isArray(path)
        ? path
        : [path]
    );
  }
}

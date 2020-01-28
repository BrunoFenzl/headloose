/**
 * Form control status classes (class -> NgControlStatus getter property)
 *
 * Sadly, we hve to duplicate this here because the original list of classes is not exported by the angular package
 */
export const formControlStatus: { [className: string]: string } = {
  'ng-dirty': 'ngClassDirty',
  'ng-invalid': 'ngClassInvalid',
  'ng-pending': 'ngClassPending',
  'ng-pristine': 'ngClassPristine',
  'ng-touched': 'ngClassTouched',
  'ng-untouched': 'ngClassUntouched',
  'ng-valid': 'ngClassValid',
};

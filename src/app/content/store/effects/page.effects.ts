import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { ContentActionTypes, ChooseComponentAction, PageActionTypes } from '../actions';
import { NetworkService } from '../../../services/network.service';
import { Action } from '@ngrx/store';
import { ModalService } from 'src/app/modal/modal.service';

@Injectable()
export class PageEffects {
  // @Effect()
  // chooseComponent$: Observable<Action> = this.actions$
  //   .pipe(
  //     // ofType(actionType) Filters stream allowing only the given Action Type to pass
  //     ofType<ChooseComponentAction>(PageActionTypes.CHOOSE_COMPONENT),
  //     mergeMap(
  //       // Makes the request and pipes the resulting Observable
  //       () => this.modalService.getPages()
  //         .pipe(
  //           map((data) => new LoadPagesSuccessAction(data)),
  //           catchError(error => of(new LoadPagesFailureAction(error))),
  //         )
  //     )
  //   );


  constructor(
    private actions$: Actions,
    private modalService: ModalService,
  ) { }
}

import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { PagesService } from '../pages.service';
import {
  LoadPagesAction,
  PageActionTypes,
  LoadPagesSuccessAction,
  LoadPagesFailureAction,
  AddPageFailureAction,
  AddPageAction,
  AddPageSuccessAction,
  DeletePageAction,
  DeletePageSuccessAction,
  DeletePageFailureAction
} from '../actions/pages.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { Action } from '@ngrx/store';

@Injectable()
export class PagesEffects {

  @Effect()
  loadPages$: Observable<Action> = this.actions$
    .pipe(
      // ofType(actionType) Filters stream allowing only the given Action Type to pass
      ofType<LoadPagesAction>(PageActionTypes.LOAD_PAGES),
      mergeMap(
        // Makes the request and pipes the resulting Observable
        () => this.pagesService.getPages()
          .pipe(
            map((data) => new LoadPagesSuccessAction(data)),
            catchError(error => of(new LoadPagesFailureAction(error))),
          )
      )
    );

  @Effect() addPage$ = this.actions$
    .pipe(
      ofType<AddPageAction>(PageActionTypes.ADD_PAGE),
      mergeMap(
        (data) => this.pagesService.addPage(data.payload) // data.payload is a new Page instance
          .pipe(
            map(() => new AddPageSuccessAction(data.payload)),
            catchError(error => of(new AddPageFailureAction(error))),
          )
      )
    );

  @Effect() deletePage$ = this.actions$
    .pipe(
      ofType<DeletePageAction>(PageActionTypes.DELETE_PAGE),
      mergeMap(
        (data) => this.pagesService.deletePage(data.payload) // data.payload is the id of the page to delete
          .pipe(
            map(() => new DeletePageSuccessAction(data.payload)),
            catchError(error => of(new DeletePageFailureAction(error)))
          )
      )
    );

  constructor(
    private actions$: Actions,
    private pagesService: PagesService,
  ) { }
}

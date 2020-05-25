import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { NetworkService } from '../../../services/network.service';
import {
  LoadPagesAction,
  ContentActionTypes,
  LoadPagesSuccessAction,
  LoadPagesFailureAction,
  AddPageFailureAction,
  AddPageAction,
  AddPageSuccessAction,
  DeletePageAction,
  DeletePageSuccessAction,
  DeletePageFailureAction,
  LoadPageSuccessAction,
  LoadPageAction,
  UpdatePageSuccessAction,
  UpdatePageFailureAction
} from '../actions/content.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { Action } from '@ngrx/store';

@Injectable()
export class ContentEffects {

  @Effect()
  loadPages$: Observable<Action> = this.actions$
    .pipe(
      // ofType(actionType) Filters stream allowing only the given Action Type to pass
      ofType<LoadPagesAction>(ContentActionTypes.LOAD_PAGES),
      mergeMap(
        // Makes the request and pipes the resulting Observable
        () => this.networkService.getPages()
          .pipe(
            map((data) => new LoadPagesSuccessAction(data)),
            catchError(error => of(new LoadPagesFailureAction(error))),
          )
      )
    );

  @Effect()
  loadPage$ = this.actions$
    .pipe(
      ofType<LoadPageAction>(ContentActionTypes.LOAD_PAGE),
      mergeMap((data) => this.networkService.getPage(data.payload) // data.payload is a new Page instance
        .pipe(
          map((result) => {
            console.log('LoadPageSuccessAction', result);
            return new LoadPageSuccessAction(result);
          }),
          catchError(error => of(new AddPageFailureAction(error))),
        )
      )
    );

  @Effect()
  addPage$ = this.actions$
    .pipe(
      ofType<AddPageAction>(ContentActionTypes.ADD_PAGE),
      mergeMap(
        (data) => this.networkService.addPage(data.payload) // data.payload is a new Page instance
          .pipe(
            map(() => new AddPageSuccessAction(data.payload)),
            catchError(error => of(new AddPageFailureAction(error))),
          )
      )
    );

  @Effect()
  updatePage$ = this.actions$
    .pipe(
      ofType<AddPageAction>(ContentActionTypes.UPDATE_PAGE),
      mergeMap(
        (data) => this.networkService.updatePage(data.payload) // data.payload is a new Page instance
          .pipe(
            map(() => new UpdatePageSuccessAction(data.payload)),
            catchError(error => of(new UpdatePageFailureAction(error))),
          )
      )
    );

  @Effect()
  deletePage$ = this.actions$
    .pipe(
      ofType<DeletePageAction>(ContentActionTypes.DELETE_PAGE),
      mergeMap(
        (data) => this.networkService.deletePage(data.payload) // data.payload is the id of the page to delete
          .pipe(
            map(() => new DeletePageSuccessAction(data.payload)),
            catchError(error => of(new DeletePageFailureAction(error)))
          )
      )
    );

  constructor(
    private actions$: Actions,
    private networkService: NetworkService,
  ) { }
}

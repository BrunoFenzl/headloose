import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { ContentActionTypes, ChooseComponentAction, PageActionTypes } from '../actions';
import { ContentService } from '../content.service';
import { Action } from '@ngrx/store';

@Injectable()
export class PageEffects {

  constructor(
    private actions$: Actions,
    private pagesService: ContentService,
  ) { }
}

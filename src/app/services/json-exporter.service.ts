import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ContentState, PageModel, getContentPages } from '../content/store';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JsonExporterService {

  constructor(
    private store: Store<ContentState>
  ) {

  }

  export() {
    this.store.select(getContentPages)
      .subscribe((value: { [id: number]: PageModel }) => {
        const state = value;
        const stateString = JSON.stringify(state);
        const name = 'headloose-pages.json';
        const blob = new Blob([stateString], { type: 'application/json', name } as BlobPropertyBag);

        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = name;
        a.click();
      });
  }
}

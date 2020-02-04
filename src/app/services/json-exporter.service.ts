import { Injectable, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ContentState, getContentPages } from '../content/store';
import { DynamicPageSchema } from 'src/dynamic-renderer/dynamic-components.interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JsonExporterService {

  private contentState$: Observable<{ [id: string]: DynamicPageSchema }>;

  constructor(
    private store: Store<ContentState>
  ) {
    this.contentState$ = this.store.select(getContentPages);
  }

  export() {
    this.contentState$.pipe(
      map(s => JSON.stringify(s))
    ).subscribe((v) => {
      const name = 'headloose-pages.json';
      const blob = new Blob([v], { type: 'application/json', name } as BlobPropertyBag);

      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = name;
      a.click();
    });
  }

  import() {

  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { DynamicPageSchema } from 'src/dynamic-renderer/dynamic-components.interfaces';
import { Store } from '@ngrx/store';
import { ContentState, getContentPages, getPagebyId, getSelectedPage } from '../content/store';

/**
 * Currently just returning static data back.
 * This service will eventually talk to a server
 * or make some sort of asynchronous requests
 */
@Injectable()
export class NetworkService {
  private PAGES_URL = 'http://localhost:3000/pages';

  constructor(
    private http: HttpClient,
    private store: Store<ContentState>,
  ) { }

  getPages(): Observable<{ [id: string]: DynamicPageSchema }> {
    console.log('getPages');
    // return this.http.get<{ [id: string]: DynamicPageSchema }>(this.PAGES_URL);
    return this.store.select(getContentPages);
  }

  getPage(id: string): Observable<DynamicPageSchema> {
    // return this.http.get<DynamicPageSchema>(`${this.PAGES_URL}/${id}.json`);
    console.log('getPage', id);
    return this.store.select(getSelectedPage);
  }

  addPage(page: DynamicPageSchema): Observable<DynamicPageSchema> {
    // return this.http.post<DynamicPageSchema>(this.PAGES_URL, page);
    return of(page);
  }

  updatePage(page: DynamicPageSchema): Observable<DynamicPageSchema> {
    // return this.http.put<DynamicPageSchema>(this.PAGES_URL, page);
    return of(page);
  }

  deletePage(id: string): Observable<string> {
    // return this.http.delete<string>(`${this.PAGES_URL}/${id}`);
    return of(id);
  }
}

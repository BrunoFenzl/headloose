import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DynamicPageSchema } from 'src/dynamic-renderer/dynamic-components.interfaces';
import { Store } from '@ngrx/store';
import { ContentState, getContentPages, getPagebyId, getSelectedPage } from '../content/store';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { map } from 'rxjs/operators';

/**
 * Currently just returning static data back.
 * This service will eventually talk to a server
 * or make some sort of asynchronous requests
 */
@Injectable()
export class NetworkService {

  constructor(
    private store: Store<ContentState>,
    private apollo: Apollo,
  ) { }

  getPages(): Observable<any> {
    console.log('getPages');
    return this.apollo.query({
      query: gql`
        {
          componentsByType(type: "page") {
            code
            message
            data {
              _id
              _type
              name
              parent
              children
              attributes {
                meta
                classnames
                title
                slug
                order
              }
            }
          }
        }
      `
    }).pipe(
      map(response => response.data)
    );

    // source$.pipe(map(result => result && result.data));
    // const loading = source$.pipe(map(result => result.loading));
    // const errors = source$.pipe(map(result => result.errors));
    // return this.http.get<{ [id: string]: DynamicPageSchema }>(this.PAGES_URL);
    return this.store.select(getContentPages);
  }

  addPage(page: DynamicPageSchema): Observable<DynamicPageSchema> {
    console.log('addPage');
    // return this.http.post<DynamicPageSchema>(this.PAGES_URL, page);
    return of(page);
  }

  updatePage(page: DynamicPageSchema): Observable<DynamicPageSchema> {
    console.log('updatePage');
    // return this.http.put<DynamicPageSchema>(this.PAGES_URL, page);
    return of(page);
  }

  deletePage(id: string): Observable<string> {
    console.log('deletePage');
    // return this.http.delete<string>(`${this.PAGES_URL}/${id}`);
    return of(id);
  }

  getTree(): Observable<{ [id: string]: DynamicPageSchema }> {
    console.log('getTree');
    // return this.http.get<{ [id: string]: DynamicPageSchema }>(this.PAGES_URL);
    return this.store.select(getContentPages);
  }

  getComponents(): Observable<{ [id: string]: DynamicPageSchema }> {
    console.log('getComponents');
    // return this.http.get<{ [id: string]: DynamicPageSchema }>(this.PAGES_URL);
    return this.store.select(getContentPages);
  }

  getComponent(): Observable<{ [id: string]: DynamicPageSchema }> {
    console.log('getComponent');
    // return this.http.get<{ [id: string]: DynamicPageSchema }>(this.PAGES_URL);
    return this.store.select(getContentPages);
  }

  addComponent(page: DynamicPageSchema): Observable<DynamicPageSchema> {
    console.log('addComponent');
    // return this.http.post<DynamicPageSchema>(this.PAGES_URL, page);
    return of(page);
  }

  updateComponent(page: DynamicPageSchema): Observable<DynamicPageSchema> {
    console.log('updateComponent');
    // return this.http.put<DynamicPageSchema>(this.PAGES_URL, page);
    return of(page);
  }

  deleteComponent(id: string): Observable<string> {
    console.log('deleteComponent');
    // return this.http.delete<string>(`${this.PAGES_URL}/${id}`);
    return of(id);
  }

  /*

    Old

  */

  getPage(id: string): Observable<DynamicPageSchema> {
    // return this.http.get<DynamicPageSchema>(`${this.PAGES_URL}/${id}.json`);
    console.log('getPage', id);
    return this.store.select(getSelectedPage);
  }
}

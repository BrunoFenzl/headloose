import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { DynamicPageSchema } from 'src/dynamic-renderer/dynamic-components.interfaces';
import { page1, pages } from '../models/test-content';

/**
 * Currently just returning static data back.
 * This service will ventually talk to a server
 * or make some sort of asynchronous requests
 */
@Injectable()
export class ContentService {
  private PAGES_URL = 'http://localhost:3000/pages';

  constructor(private http: HttpClient) { }

  getPages(): Observable<{ [id: string]: DynamicPageSchema }> {
    console.log('getPages');
    // return this.http.get<{ [id: string]: DynamicPageSchema }>(this.PAGES_URL);
    return of(pages);
  }

  getPage(id: string): Observable<DynamicPageSchema> {
    // return this.http.get<DynamicPageSchema>(`${this.PAGES_URL}/${id}.json`);
    console.log('getPage', id);
    return of(pages[id]);
  }

  addPage(page: DynamicPageSchema): Observable<DynamicPageSchema> {
    return this.http.post<DynamicPageSchema>(this.PAGES_URL, page);
  }

  deletePage(id: string): Observable<string> {
    // return this.http.delete<string>(`${this.PAGES_URL}/${id}`);
    return of(id);
  }
}

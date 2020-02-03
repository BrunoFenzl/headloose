import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PageModel } from '../models/pages.model';
import { Observable, of } from 'rxjs';
import { DynamicPageSchema } from 'src/dynamic-renderer/dynamic-components.interfaces';
import { page1, pages } from '../models/test-content';

@Injectable()
export class ContentService {
  private PAGES_URL = 'http://localhost:3000/pages';
  private PAGE = 'http://localhost:8080/pages';

  constructor(private http: HttpClient) { }

  getPages(): Observable<PageModel[]> {
    // return this.http.get<PageModel[]>(this.PAGES_URL);
    return of(pages);
  }

  getPage(id: string): Observable<DynamicPageSchema> {
    // return this.http.get<DynamicPageSchema>(`${this.PAGE}/${id}.json`);
    return of(page1);
  }

  addPage(page: PageModel): Observable<PageModel> {
    return this.http.post<PageModel>(this.PAGES_URL, page);
  }

  deletePage(id: string): Observable<string> {
    // return this.http.delete<string>(`${this.PAGES_URL}/${id}`);
    return of(id);
  }
}

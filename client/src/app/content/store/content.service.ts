import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PageModel } from './models/pages.model';
import { Observable } from 'rxjs';
import { DynamicPageSchema } from 'src/dynamic-renderer/dynamic-components.interfaces';

@Injectable()
export class ContentService {
  private PAGES_URL = 'http://localhost:3000/pages';
  private PAGE = 'http://localhost:8080/pages';

  constructor(private http: HttpClient) { }

  getPages(): Observable<PageModel[]> {
    return this.http.get<PageModel[]>(this.PAGES_URL);
  }

  getPage(id: string): Observable<DynamicPageSchema> {
    return this.http.get<DynamicPageSchema>(`${this.PAGE}/${id}.json`);
  }

  addPage(page: PageModel): Observable<PageModel> {
    return this.http.post<PageModel>(this.PAGES_URL, page);
  }

  deletePage(id: string): Observable<string> {
    return this.http.delete<string>(`${this.PAGES_URL}/${id}`);
  }
}

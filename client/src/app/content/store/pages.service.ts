import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PageModel } from './models/pages.model';
import { Observable } from 'rxjs';

@Injectable()
export class PagesService {
  private PAGES_URL = 'http://localhost:3000/pages';

  constructor(private http: HttpClient) { }

  getPages(): Observable<PageModel[]> {
    return this.http.get<PageModel[]>(this.PAGES_URL);
  }

  addPage(page: PageModel): Observable<PageModel> {
    return this.http.post<PageModel>(this.PAGES_URL, page);
  }

  deletePage(id: string): Observable<string> {
    return this.http.delete<string>(`${this.PAGES_URL}/${id}`);
  }
}

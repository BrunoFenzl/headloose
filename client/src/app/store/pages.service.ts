import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Page } from './models/pages.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagesService {
  private PAGES_URL = 'http://localhost:3000/pages';

  constructor(private http: HttpClient) {}

  getPages(): Observable<Page[]> {
    return this.http.get<Page[]>(this.PAGES_URL);
  }

  addPage(page: Page): Observable<Page> {
    return this.http.post<Page>(this.PAGES_URL, page);
  }

  deletePage(id: string): Observable<string> {
    return this.http.delete<string>(`${this.PAGES_URL}/${id}`);
  }
}

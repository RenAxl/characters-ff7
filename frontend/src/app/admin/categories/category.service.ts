import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { AppConstants } from 'src/app/app-constants';
import { Pagination } from 'src/app/core/models/Pagination';
import { Category } from 'src/app/core/models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  list(pagination: Pagination, filterName: string): Observable<any> {
    let params = new HttpParams()
    .set('name', filterName)
    .set('page', String(pagination.page))
    .set('linesPerPage', String(pagination.linesPerPage))
    .set('direction', String(pagination.direction))
    .set('orderBy', String(pagination.orderBy));

    return this.http.get<any>(AppConstants.backendServer + 'categories', { params });
  }

  insert(category: Category) : Observable<any> {
    return this.http.post<any>(AppConstants.backendServer + 'categories', category);
  }

}

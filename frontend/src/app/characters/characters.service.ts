import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { AppConstants } from '../app-constants';
import { Observable } from 'rxjs';
import { Pagination } from '../core/models/Pagination';
import { FilterCharacter } from '../core/models/FilterCharacter';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  list(pagination: Pagination, filterCharacter: FilterCharacter): Observable<any> {

    let params = new HttpParams()
    .set('name', String(filterCharacter.name))
    .set('categoryId', String(filterCharacter.categoryId))
    .set('page', String(pagination.page))
    .set('linesPerPage', String(pagination.linesPerPage))
    .set('direction', String(pagination.direction))
    .set('orderBy', String(pagination.orderBy));

    return this.http.get<any>(AppConstants.backendServer + 'characters', { params });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { AppConstants } from '../../app-constants';
import { Observable } from 'rxjs';
import { Pagination } from 'src/app/core/models/Pagination';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(private http: HttpClient) {}

  list(pagination: Pagination): Observable<any> {
    let params = new HttpParams()
    .set('page', String(pagination.page))
    .set('linesPerPage', String(pagination.linesPerPage))
    .set('direction', String(pagination.direction))
    .set('orderBy', String(pagination.orderBy));
    
    return this.http.get<any>(AppConstants.backendServer + 'characters', { params });
  }

}
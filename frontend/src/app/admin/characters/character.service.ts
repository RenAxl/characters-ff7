import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { AppConstants } from '../../app-constants';
import { Observable } from 'rxjs';
import { Pagination } from 'src/app/core/models/Pagination';
import { Character } from 'src/app/core/models/Character';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(private http: HttpClient) {}

  list(pagination: Pagination, filterName: string): Observable<any> {
    let params = new HttpParams()
    .set('name', filterName)
    .set('page', String(pagination.page))
    .set('linesPerPage', String(pagination.linesPerPage))
    .set('direction', String(pagination.direction))
    .set('orderBy', String(pagination.orderBy));

    return this.http.get<any>(AppConstants.backendServer + 'characters', { params });
  }

  insert(character: Character): Observable<any> {
    return this.http.post<any>(AppConstants.backendServer + 'characters', character);
  }

  findById(id: any): Observable<any> {
    return this.http.get<any>(AppConstants.backendServer + 'characters/' + id);
  }
  
  update(character: Character) : Observable<any> {
    return this.http.put<any>(AppConstants.backendServer + 'characters/' + character.id, character);
  }

  delete(id: Number): Observable<any> {
    return this.http.delete(AppConstants.backendServer + 'characters/' + id);
  }
}

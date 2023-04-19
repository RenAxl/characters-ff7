import { Component, OnInit } from '@angular/core';
import { Character } from '../core/models/Character';

import { LazyLoadEvent } from 'primeng/api';

import { CharactersService } from './characters.service';
import { Pagination } from '../core/models/Pagination';
import { FilterCharacter } from '../core/models/FilterCharacter';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: Character[] = [];

  pagination: Pagination = new Pagination();

  totalElements: number = 0;

  filterCharacter: FilterCharacter = new FilterCharacter();

  constructor(private charactersService: CharactersService) { 
    this.pagination.linesPerPage = 4;
  }
  
  ngOnInit(): void {
    this.list();
  }

  list(page: number = 0): void {
    this.pagination.page = page;
    this.charactersService
      .list(this.pagination, this.filterCharacter)
      .subscribe((data) => {
        this.characters = data.content;
        this.totalElements = data.totalElements;
      });
  }

  changePage(event: LazyLoadEvent) {
    const page = event!.first! / event!.rows!;
    this.list(page);
  }
  searchCharacter(filterCharacter: FilterCharacter) {
    this.filterCharacter = filterCharacter;
    this.list();
  }
}

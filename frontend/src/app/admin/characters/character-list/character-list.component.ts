import { Component, OnInit } from '@angular/core';

import { LazyLoadEvent } from 'primeng/api';

import { Character } from 'src/app/core/models/Character';
import { CharacterService } from '../character.service';
import { Pagination } from 'src/app/core/models/Pagination';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  characters: Character[] = [];

  pagination: Pagination = new Pagination();

  totalElements: number = 0;

  filterName: string = '';

  constructor(private characterService: CharacterService) { 
    this.pagination.linesPerPage = 3;
  }

  ngOnInit(): void {
  }

  list(page: number = 0): void {
    this.pagination.page = page;
    this.characterService.list(this.pagination, this.filterName).subscribe((data)=> {
      this.characters = data.content;
      this.totalElements = data.totalElements;
    });
  }

  changePage(event: LazyLoadEvent) {
    const page = event!.first! / event!.rows!;
    this.list(page);
  }

  searchTrainer(name: string) {
    this.filterName = name;
    this.list();
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ConfirmationService,
  LazyLoadEvent,
  MessageService,
} from 'primeng/api';
import { Table } from 'primeng/table';

import { Character } from 'src/app/core/models/Character';
import { CharacterService } from '../character.service';
import { Pagination } from 'src/app/core/models/Pagination';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css'],
})
export class CharacterListComponent implements OnInit {
  characters: Character[] = [];

  pagination: Pagination = new Pagination();

  totalElements: number = 0;

  filterName: string = '';

  @ViewChild('characterTable') grid!: Table;

  constructor(
    private characterService: CharacterService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private confirmationService: ConfirmationService
  ) {
    this.pagination.linesPerPage = 3;
  }

  ngOnInit(): void {}

  list(page: number = 0): void {
    this.pagination.page = page;
    this.characterService
      .list(this.pagination, this.filterName)
      .subscribe((data) => {
        this.characters = data.content;
        this.totalElements = data.totalElements;
      });
  }

  changePage(event: LazyLoadEvent) {
    const page = event!.first! / event!.rows!;
    this.list(page);
  }

  searchCharacter(name: string) {
    this.filterName = name;
    this.list();
  }

  delete(member: any) {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.characterService.delete(member.id).subscribe(
          () => {
            this.grid.reset();
            this.messageService.add({
              severity: 'success',
              detail: 'Personagem excluído com sucesso!',
            });
          },
          (error) => this.errorHandler.handle(error)
        );
      },
    });
  }
}

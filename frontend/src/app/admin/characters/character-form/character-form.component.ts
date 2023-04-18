import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { MessageService } from 'primeng/api';

import { Character } from 'src/app/core/models/Character';
import { CharacterService } from '../character.service';
import { CategoryService } from '../../categories/category.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { Category } from 'src/app/core/models/Category';
import { Pagination } from 'src/app/core/models/Pagination';


@Component({
  selector: 'app-character-form',
  templateUrl: './character-form.component.html',
  styleUrls: ['./character-form.component.css']
})
export class CharacterFormComponent implements OnInit {

  character: Character = new Character();
  
  categories: Category[] = [];

  select: number[] = [];

  constructor(
    private characterService: CharacterService,
    private categoryService: CategoryService,
    private messageService: MessageService,
    private router: Router,
    private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit(): void {
    this.listCategories();
  }

  save(form: NgForm){
    console.log(form.value);
    this.character.categories = form.value.categories;
    this.insert();
  }

  listCategories() {
    let pagination: Pagination = new Pagination();
    let categoryFilterName: string = '';
    pagination.linesPerPage = 12;
    this.categoryService
      .list(pagination, categoryFilterName)
      .subscribe((data) => {
        this.categories = data.content;
      });
  }

  insert() {
    this.characterService.insert(this.character).subscribe(
      () => {
        this.router.navigate(['/admin/characters/list']);
        this.messageService.add({ severity: 'success', detail: 'Personagem cadastrado com sucesso!' });
      },
      (error) => this.errorHandler.handle(error));
  }

}

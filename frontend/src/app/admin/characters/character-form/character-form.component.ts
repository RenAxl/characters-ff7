import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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
    private route: ActivatedRoute,
    private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit(): void {
    this.listCategories();

    const id = this.route.snapshot.paramMap.get('characterId');

    if(id !=null){
      this.characterService.findById(id).subscribe(data => {
        this.character = data;
        console.log(data);
        console.log(this.character);
      })
    }
  }

  save(form: NgForm){
    this.character.categories = form.value.categories;
    if (this.character.id != null && this.character.id.toString().trim() != null) { 
      this.update();
    }else{
      this.insert();
    }
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

  update() {
    this.characterService.update(this.character).subscribe(
      () => {
        this.router.navigate(['/admin/characters/list']);
        this.messageService.add({ severity: 'success', detail: 'Personagem editado com sucesso!' });
      },
      (error) => this.errorHandler.handle(error));
  }

}

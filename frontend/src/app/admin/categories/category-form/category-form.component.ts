import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

import { MessageService } from 'primeng/api';

import { Category } from 'src/app/core/models/Category';
import { CategoryService } from '../category.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

  category: Category = new Category();

  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    ) { }

  ngOnInit(): void {
  }

  save(){
    this.insert();
  }

  insert(){
    this.categoryService.insert(this.category).subscribe(() => {
      this.router.navigate(['/admin/categories/list']);
      this.messageService.add({ severity: 'success', detail: 'Categoria cadastrada com sucesso!' });
    }, error => this.errorHandler.handle(error)); 
  }

}

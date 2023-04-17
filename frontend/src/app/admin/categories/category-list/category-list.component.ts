import { Component, OnInit } from '@angular/core';

import { LazyLoadEvent } from 'primeng/api';


import { Category } from 'src/app/core/models/Category';
import { CategoryService } from '../category.service';
import { Pagination } from 'src/app/core/models/Pagination';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: Category[] = [];

  pagination: Pagination = new Pagination();

  totalElements: number = 0;

  filterName: string = '';

  constructor(
    private categoryService: CategoryService
  ) {
    this.pagination.linesPerPage = 3;
   }

  ngOnInit(): void {
  }

  list(page: number = 0): void {
    this.pagination.page = page;
    this.categoryService
      .list(this.pagination, this.filterName)
      .subscribe((data) => {
        this.categories = data.content;
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

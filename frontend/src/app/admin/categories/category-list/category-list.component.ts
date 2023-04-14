import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/core/models/Category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: Category[] = [];

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.list();
  }

  list(): void {
    this.categoryService
      .list()
      .subscribe((data) => {
        this.categories = data.content;
      });
  }

}

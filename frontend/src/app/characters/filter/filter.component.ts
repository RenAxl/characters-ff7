import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoryService } from 'src/app/admin/categories/category.service';
import { Category } from 'src/app/core/models/Category';
import { Character } from 'src/app/core/models/Character';
import { FilterCharacter } from 'src/app/core/models/FilterCharacter';
import { Pagination } from 'src/app/core/models/Pagination';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {

  @Input() text: string = '';
  
  filterCharacter: FilterCharacter = new FilterCharacter();

  @Output() search = new EventEmitter<FilterCharacter>();

  categories: Category[] = [];

  select: number[] = [];

  constructor(
    private categoryService: CategoryService
    ) {}

  ngOnInit(): void {
    this.listCategories();
  }

  save(form: NgForm) {
    if(form.value.category.id === undefined){
      this.filterCharacter.categoryId = 0;
      this.searchCharacter();
    } else {
    this.filterCharacter.name = form.value.name;
    this.filterCharacter.categoryId = form.value.category.id;
    this.searchCharacter();
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

  searchCharacter(){
    this.search.emit(this.filterCharacter);
  }

  formClear(){
    this.filterCharacter.name = '';
    this.filterCharacter.categoryId = 0;
    this.search.emit(this.filterCharacter);
  }

}

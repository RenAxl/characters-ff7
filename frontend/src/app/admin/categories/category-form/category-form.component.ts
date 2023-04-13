import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/core/models/Category';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

  category: Category = new Category();

  constructor() { }

  ngOnInit(): void {
  }

  save(form: NgForm){
    console.log(form.value);
  }

}

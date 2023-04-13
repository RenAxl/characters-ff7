import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';

import { CategoryFormComponent } from './category-form/category-form.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoriesRoutingModule } from './categories-routing.modules';
import { AdminModule } from '../admin.module';
import { CoreModule } from 'src/app/core/core.module';



@NgModule({
  declarations: [
    CategoryFormComponent,
    CategoryListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    CoreModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    AdminModule,
    InputTextModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule { }

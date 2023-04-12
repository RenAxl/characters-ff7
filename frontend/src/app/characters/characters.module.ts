import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {PaginatorModule} from 'primeng/paginator';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';

import { CharactersComponent } from './characters.component';
import { CharactersRoutingModule } from './characters-routing.modules';
import { CardComponent } from './card/card.component';
import { FilterComponent } from './filter/filter.component';


@NgModule({
  declarations: [
    CharactersComponent,
    CardComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,


    PaginatorModule,
    InputTextModule,
    DropdownModule,
    CharactersRoutingModule
  ]
})
export class CharactersModule { }

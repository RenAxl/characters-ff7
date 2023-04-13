import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { CharacterFormComponent } from './character-form/character-form.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharactersRoutingModule } from './characters-routing.modules';
import { AdminModule } from '../admin.module';



@NgModule({
  declarations: [
    CharacterFormComponent,
    CharacterListComponent
  ],
  imports: [
    CommonModule,

    AdminModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    CharactersRoutingModule
  ]
})
export class CharactersModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';

import { CharacterFormComponent } from './character-form/character-form.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharactersRoutingModule } from './characters-routing.modules';
import { AdminModule } from '../admin.module';
import { CoreModule } from 'src/app/core/core.module';



@NgModule({
  declarations: [
    CharacterFormComponent,
    CharacterListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    AdminModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputNumberModule,
    InputTextModule,
    InputTextareaModule,
    DropdownModule,
    CoreModule,
    CharactersRoutingModule
  ]
})
export class CharactersModule { }

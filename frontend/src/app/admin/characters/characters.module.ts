import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterFormComponent } from './character-form/character-form.component';
import { CharacterListComponent } from './character-list/character-list.component';



@NgModule({
  declarations: [
    CharacterFormComponent,
    CharacterListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CharactersModule { }

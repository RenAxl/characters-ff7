import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters.component';
import { CharactersRoutingModule } from './characters-routing.modules';

@NgModule({
  declarations: [
    CharactersComponent
  ],
  imports: [
    CommonModule,

    CharactersRoutingModule
  ]
})
export class CharactersModule { }

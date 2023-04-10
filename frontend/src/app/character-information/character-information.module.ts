import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterInformationComponent } from './character-information.component';
import { CharacterInformationRoutingModule } from './character-information-routing.modules';



@NgModule({
  declarations: [
    CharacterInformationComponent
  ],
  imports: [
    CommonModule,

    CharacterInformationRoutingModule
  ]
})
export class CharacterInformationModule { }

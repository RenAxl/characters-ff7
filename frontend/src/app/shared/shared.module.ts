import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { IconsModule } from './icons/icons.module';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,

    RouterModule,
    IconsModule
  ],
  exports:[
    NavbarComponent
  ]
})
export class SharedModule { }

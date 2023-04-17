import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { IconsModule } from './icons/icons.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MessageComponent } from './message/message.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    MessageComponent
  ],
  imports: [
    CommonModule,

    RouterModule,
    IconsModule
  ],
  exports:[
    NavbarComponent,
    SidebarComponent,
    MessageComponent
  ]
})
export class SharedModule { }

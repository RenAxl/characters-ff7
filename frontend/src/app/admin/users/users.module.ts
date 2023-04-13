import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';

import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UsersRoutingModule } from './users-routing.modules';
import { AdminModule } from '../admin.module';
import { CoreModule } from 'src/app/core/core.module';



@NgModule({
  declarations: [
    UserListComponent,
    UserFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    AdminModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputTextModule,
    MultiSelectModule,
    CoreModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }

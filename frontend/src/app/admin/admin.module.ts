import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.modules';
import { SharedModule } from '../shared/shared.module';
import { FilterComponent } from './filter/filter.component';



@NgModule({
  declarations: [
    AdminComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    SharedModule,
    AdminRoutingModule
  ],
  exports:[FilterComponent]
})
export class AdminModule { }

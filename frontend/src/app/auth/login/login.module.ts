import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginFormComponent } from './login-form/login-form.component';
import { LoginRoutingModule } from './login-routing.modules';
import { CoreModule } from 'src/app/core/core.module';



@NgModule({
  declarations: [
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    CoreModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }

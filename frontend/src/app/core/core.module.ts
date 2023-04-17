import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

import { ErrorHandlerService } from './error-handler.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    
    ToastModule
  ],
  exports: [
    ToastModule,
  ],
  providers: [
    MessageService,
    ErrorHandlerService,
  ]
})
export class CoreModule {}

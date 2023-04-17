import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { ErrorHandlerService } from './error-handler.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    
    ToastModule,
    ConfirmDialogModule,
  ],
  exports: [
    ToastModule,
    ConfirmDialogModule
  ],
  providers: [
    MessageService,
    ErrorHandlerService,
    ConfirmationService,
  ]
})
export class CoreModule {}

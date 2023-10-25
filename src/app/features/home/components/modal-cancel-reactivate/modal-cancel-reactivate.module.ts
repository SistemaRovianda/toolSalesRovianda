import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalCancelReactivateComponent } from './modal-cancel-reactivate.component';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [ModalCancelReactivateComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  exports: [ModalCancelReactivateComponent]
})
export class ModalCancelReactivateModule { }

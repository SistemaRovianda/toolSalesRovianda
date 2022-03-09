import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalCancelReactivateComponent } from './modal-cancel-reactivate.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [ModalCancelReactivateComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [ModalCancelReactivateComponent]
})
export class ModalCancelReactivateModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalConfirmRemoveComponent } from './modal-confirm-remove.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [ModalConfirmRemoveComponent],
  imports: [
    CommonModule,MatButtonModule
  ],
  exports:[ModalConfirmRemoveComponent]
})
export class ModalConfirmRemoveModule { }

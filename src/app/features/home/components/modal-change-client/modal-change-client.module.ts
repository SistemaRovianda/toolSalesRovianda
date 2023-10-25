import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalChangeClientComponent } from './modal-change-client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [ModalChangeClientComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule
  ],
  exports:[ModalChangeClientComponent]
})
export class ModalChangeClientModule { }

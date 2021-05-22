import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalShowSaleComponent } from './modal-show-sale.component';
import { MatButtonModule } from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [ModalShowSaleComponent],
  imports: [
    CommonModule,MatButtonModule,MatProgressSpinnerModule
  ],
  exports:[ModalShowSaleComponent]
})
export class ModalShowSaleModule { }

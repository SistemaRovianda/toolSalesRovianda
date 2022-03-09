import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableSalesComponent } from './table-sales.component';
import { RouterModule } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';
import { ModalShowSaleModule } from '../modal-show-sale/modal-show-sale.module';
import { ModalShowSaleComponent } from '../modal-show-sale/modal-show-sale.component';
import { ModalListSalesTakedComponent } from '../modal-list-sales-taked/modal-list-sales-taked.component';
import { ModalListSalesTakedModule } from '../modal-list-sales-taked/modal-list-sales-taked.module';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalCancelReactivateModule } from '../modal-cancel-reactivate/modal-cancel-reactivate.module';
@NgModule({
  declarations: [TableSalesComponent],
  imports: [
    CommonModule,RouterModule,MatTableModule,MatButtonModule,MatPaginatorModule,MatProgressSpinnerModule,MatDialogModule,ModalShowSaleModule,
    MatInputModule,MatButtonModule,ReactiveFormsModule,
  FormsModule,
  ModalCancelReactivateModule
  ],
  exports:[TableSalesComponent],
  entryComponents:[ModalShowSaleComponent]
})
export class TableSalesModule { }

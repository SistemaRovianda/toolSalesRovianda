import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { TableSalesModule } from '../components/table-sales/table-sales.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {  MatIconModule } from '@angular/material/icon';
import { ModalListSalesTakedModule } from '../components/modal-list-sales-taked/modal-list-sales-taked.module';
import { ModalListSalesTakedComponent } from '../components/modal-list-sales-taked/modal-list-sales-taked.component';
import { ModalConfirmRemoveModule } from '../components/modal-confirm-remove/modal-confirm-remove.module';
import { ModalConfirmRemoveComponent } from '../components/modal-confirm-remove/modal-confirm-remove.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from "@angular/material/datepicker";
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalReportsModule } from '../components/modal-reports/modal-reports.module';
@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,TableSalesModule,MatCardModule,MatButtonModule,MatIconModule,ModalListSalesTakedModule,ModalConfirmRemoveModule,MatProgressSpinnerModule,
    MatIconModule,
    MatNativeDateModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    ModalReportsModule
  ],exports:[HomeComponent,ModalListSalesTakedComponent,ModalConfirmRemoveComponent]
})
export class HomeModule { }

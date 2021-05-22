import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeRoutingModule} from "./home.routing";
import { HomeModule } from './page/home.module';
import { ModalShowSaleComponent } from './components/modal-show-sale/modal-show-sale.component';
import { ModalConfirmRemoveComponent } from './components/modal-confirm-remove/modal-confirm-remove.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,HomeRoutingModule
  ]
})
export class HomePageModule { }

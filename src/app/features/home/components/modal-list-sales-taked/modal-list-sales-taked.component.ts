import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/Models/App.State';
import { Sale } from 'src/app/Models/Sale.Model';
import { popRemoveSale } from 'src/app/providers/store/sales.actions';
import { getTotalSalesRemoveSelector } from 'src/app/providers/store/sales.selectors';

@Component({
  selector: 'app-modal-list-sales-taked',
  templateUrl: './modal-list-sales-taked.component.html',
  styleUrls: ['./modal-list-sales-taked.component.scss']
})
export class ModalListSalesTakedComponent implements OnInit,OnDestroy {

  constructor(private store:Store<AppState>) { }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  displayedColumns: string[] = ['No.', 'Folio', 'Monto','Restaurar'];
  sales:Sale[]=[];
  dataSource:MatTableDataSource<Sale>;
  private subscription:Subscription;
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();
    this.subscription=new Subscription();
    this.dataSource.data=this.sales;
    this.subscription.add(this.store.select(getTotalSalesRemoveSelector).subscribe((sales)=>{
      this.sales=sales;
      this.dataSource.data=this.sales;
    }))
  }

  restore(id:number){
    this.store.dispatch(popRemoveSale({id}));
  }

}

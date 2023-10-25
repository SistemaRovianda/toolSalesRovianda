import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/Models/App.State';
import { Sale } from 'src/app/Models/Sale.Model';
import { getDevolutionTicketOfSale, getTicketOfSale } from 'src/app/providers/store/sales.actions';
import { getCurrentTicketSelected, getLoadingTicketSelected, getLoaginStatusSelector } from 'src/app/providers/store/sales.selectors';

@Component({
  selector: 'app-modal-show-sale',
  templateUrl: './modal-show-sale.component.html',
  styleUrls: ['./modal-show-sale.component.scss']
})
export class ModalShowSaleComponent implements OnInit,OnDestroy {

  constructor(@Inject(MAT_DIALOG_DATA) public data:{sale:Sale,type:string},private store:Store<AppState>,public dialogRef:MatDialogRef<ModalShowSaleComponent>) { }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  ticket:string="";
  loading:boolean=false;
  private subscription:Subscription;
  ngOnInit() {
    this.subscription=new Subscription();
    if(this.data.sale.devolutionRequest){
      this.store.dispatch(getDevolutionTicketOfSale({saleId:this.data.sale.saleId}));
    }else{
      this.store.dispatch(getTicketOfSale({saleId:this.data.sale.saleId}));
    }
    this.subscription.add(this.store.select(getCurrentTicketSelected).subscribe((ticket:string)=>{
      //console.log("se recibio ticket",ticket);
      if(ticket!=undefined){
      
      this.ticket=ticket;
      }
    }));
  
    this.subscription.add(this.store.select(getLoadingTicketSelected).subscribe((isLoading:boolean)=>{
      this.loading=isLoading;
    }));
  }

  cancel(){
    this.dialogRef.close(null);
  }
  take(){
    if(this.data.type!='see'){
      this.dialogRef.close(this.data.sale.saleId);
    }else{
      this.dialogRef.close(null);
    }
  }

}

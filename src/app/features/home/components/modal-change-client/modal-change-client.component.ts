import { Component, OnDestroy, OnInit,Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/Models/App.State';
import { getClientsOfSeller } from 'src/app/providers/store/sales.actions';
import { getClientsList, getLoaginStatusSelector, getTotalCountClients } from 'src/app/providers/store/sales.selectors';

@Component({
  selector: 'app-modal-change-client',
  templateUrl: './modal-change-client.component.html',
  styleUrls: ['./modal-change-client.component.scss']
})
export class ModalChangeClientComponent implements OnInit,OnDestroy {

  dataSource:MatTableDataSource<any>;
  displayedColumns:string[]=["name","code","aspelcode","rfc"];
  form:FormGroup;
  totalCount:number=0;
  page:number=0;
  perPage:number=10;
  clients:any[]=[];
  isLoading:boolean=false;
  sellerId:string="";
  constructor(private store:Store<AppState>,@Inject(MAT_DIALOG_DATA) private data:{sellerId:string}) { 
    this.dataSource = new MatTableDataSource(); 
    this.sellerId = this.data.sellerId;
  }
  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }
  subcription:Subscription;
  get hint(){
    return this.form.get("hint");
  }
  get typeFilter(){
    return this.form.get("typeFilter")
  }
  ngOnInit(): void {
    this.subcription = new Subscription();
    this.form = new FormGroup({
      hint: new FormControl(""),
      typeFilter: new FormControl("NAME",Validators.required)
    });
    this.subcription.add(this.store.select(getTotalCountClients).subscribe((totalCount)=>{
      this.totalCount=totalCount;
    }));
    this.subcription.add(this.store.select(getClientsList).subscribe((clients)=>{
      this.clients=clients;
    }));
    this.subcription.add(this.store.select(getLoaginStatusSelector).subscribe((isLoading)=>{
      this.isLoading =isLoading;
    }))
  }

  searchClients(){
      if(!this.isLoading){
        this.store.dispatch(getClientsOfSeller({page:this.page,perPage:this.perPage,sellerId:this.sellerId,filter:this.typeFilter.value,hint:this.hint.value}));
      }
  }

  search(event:{pageIndex:number}){
    if(event!=null){
      this.page=event.pageIndex;
    }
    this.searchClients();
  }


}

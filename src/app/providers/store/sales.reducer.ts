import { Statement } from '@angular/compiler';
import { createReducer, on } from '@ngrx/store';
import { AppModule } from 'src/app/app.module';
import { Sale } from 'src/app/Models/Sale.Model';

import * as saleActions from "./sales.actions";
export interface salesState{
    sales:Sale[],
    clients:any[],
    totalCountClients:number,
    count:number,
    loading:boolean,
    salesIds:Array<Sale>,
    totalAcumulated:number,
    currentTiket:string,
    loadingTicket:boolean,
    isDeletingSales:boolean,
    errorDeleting:string
}

const initValue:salesState ={
    sales:[],
    clients:[],
    totalCountClients:0,
    loading:false,
    count:0,
    salesIds:[],
    totalAcumulated:0,
    currentTiket:"",
    loadingTicket:false,
    isDeletingSales:false,
    errorDeleting:null
};

export const saleReducer = createReducer<salesState>(
    initValue,
    on(saleActions.getAllSalesForSuperAdmin,(state)=>({...state,loading:true})),
    on(saleActions.setAllSalesForSuperAdmin,(state,{sales,count})=>({...state,sales,loading:false,count})),
    on(saleActions.sendAllRemovesToSystemSuccess,(state)=>({...state,sales:[],loading:false,count:0})),
    on(saleActions.sendAllRemovesToSystemError,(state)=>({...state,loading:false})),
    on(saleActions.addRemoveSale,(state,{id})=>{
        let sales = [...state.sales];
        let salesIds = [...state.salesIds];
        let saleId=[...sales.filter(x=>x.saleId==id)][0];
        salesIds.push({
           ...saleId
        });
        let amount = {...state}.totalAcumulated;
        amount+=saleId.amount;
        let idsOmited = salesIds.map(x=>x.saleId);
        //console.log(sales.length);
        sales=sales.filter(x=>!idsOmited.includes(x.saleId));
        //console.log(sales.length);
        
        return {...state,salesIds:[...salesIds],totalAcumulated:amount,sales:[...sales],loading:false}
    }),
    on(saleActions.popRemoveSale,(state,{id})=>{
        let salesIds = [...state.salesIds];
        let saleId = [...salesIds.filter(x=>x.saleId==id)][0];
        let amount = {...state}.totalAcumulated;
        amount-=saleId.amount;
        salesIds=salesIds.filter(x=>x.saleId!=id);
        let idsOmited = salesIds.map(x=>x.saleId);
        let sales=[...state.sales.filter(x=>!idsOmited.includes(x.saleId))];
        sales.push(saleId);
        return {...state,salesIds,totalAcumulated:amount,sales,loading:false};
    }),
    on(saleActions.getTicketOfSale,(state,{saleId})=>({...state,loadingTicket:true})),
    on(saleActions.setTicketOfSale,(state,{ticket})=>({...state,currentTiket:ticket,loadingTicket:false})),
    on(saleActions.deleteSalesSuperAdmin,(state,{salesIds})=>({...state,isDeletingSales:true})),
    on(saleActions.deleteSalesSuperAdminSuccess,(state)=>({...state,isDeletingSales:false,salesIds:[],totalAcumulated:0})),
    on(saleActions.deleteSalesSuperAdminFail,(state,{error})=>({...state,isDeletingSales:false,errorDeleting:error})),
    on(saleActions.getClientsOfSeller,(state)=>({...state,loading:true})),
    on(saleActions.getClientsOfSellerSuccess,(state,{totalCount,clientList})=>({...state,loading:false,totalCountClients:totalCount,clients:clientList})),
    on(saleActions.getClientsOfSellerError,(state)=>({...state,loading:false,totalCountClients:0,clients:[]}))
);


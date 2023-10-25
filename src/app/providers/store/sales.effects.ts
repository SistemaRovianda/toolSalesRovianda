import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, switchMap,mergeMap } from 'rxjs/operators';
import { Sale } from 'src/app/Models/Sale.Model';
import { RoviandaApiService } from '../services/Rovianda.Api.Service';
import * as saleActions from "./sales.actions";
@Injectable({
    providedIn:"root"
})
export class SaleEffects{

    constructor(private roviandaApi:RoviandaApiService,private actions:Actions){
    }

    getClientsOfSeller$ = createEffect(()=>this.actions.pipe(
        ofType(saleActions.getClientsOfSeller),
        mergeMap((action)=>this.roviandaApi.getListOfClient(action.page,action.perPage,action.hint,action.filter,action.sellerId).pipe(
            switchMap((response)=>{
                let totalCount:number=+response.headers.get("x-total-count");
                let clientList:any=response.body;
                return [saleActions.getClientsOfSellerSuccess({totalCount,clientList})]}),
            catchError(()=>[saleActions.getClientsOfSellerError()])
        ))
    ));

    getAllSales$ = createEffect(()=>this.actions.pipe(
        ofType(saleActions.getAllSalesForSuperAdmin),
        exhaustMap((action)=>this.roviandaApi.getAllSales(action.page,action.peerPage,action.saleIds,action.date,action.folio).pipe(
            switchMap((response)=>[saleActions.setAllSalesForSuperAdmin({sales:response.body as Sale[],count:+response.headers.get('x-total-count')})]),
            catchError(()=>[saleActions.setAllSalesForSuperAdmin({sales:[],count:0})])
        ))
    ));

    getTicket$ = createEffect(()=>this.actions.pipe(
        ofType(saleActions.getTicketOfSale),
        exhaustMap((action)=>this.roviandaApi.getTicket(action.saleId).pipe(
            switchMap((response)=>{
                //console.log("TICKET",response);
                return [saleActions.setTicketOfSale({ticket:response as string})]
            }),
            catchError((err)=>{
                //console.log("ERROR",err);
                return [saleActions.setTicketOfSale({ticket:""})]
            })
        ))
    ))
    
    getDevolutionTicket$ = createEffect(()=>this.actions.pipe(
        ofType(saleActions.getDevolutionTicketOfSale),
        exhaustMap((action)=>this.roviandaApi.getDevolutionTicket(action.saleId).pipe(
            switchMap((response)=>{
                //console.log("TICKET",response);
                return [saleActions.setTicketOfSale({ticket:response as string})]
            }),
            catchError((err)=>{
                //console.log("ERROR",err);
                return [saleActions.setTicketOfSale({ticket:""})]
            })
        ))
    ))

    deleteSales$ = createEffect(()=>this.actions.pipe(
        ofType(saleActions.deleteSalesSuperAdmin),
        exhaustMap((action)=>this.roviandaApi.delSalesOfSystem(action.salesIds,action.date).pipe(
            switchMap(()=>[saleActions.deleteSalesSuperAdminSuccess()]),
            catchError((err)=>[saleActions.deleteSalesSuperAdminFail({error:err.message})])
        ))
    ))

}
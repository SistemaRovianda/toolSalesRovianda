import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, switchMap } from 'rxjs/operators';
import { Sale } from 'src/app/Models/Sale.Model';
import { RoviandaApiService } from '../services/Rovianda.Api.Service';
import * as saleActions from "./sales.actions";
@Injectable({
    providedIn:"root"
})
export class SaleEffects{

    constructor(private roviandaApi:RoviandaApiService,private actions:Actions){
    }

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

    deleteSales$ = createEffect(()=>this.actions.pipe(
        ofType(saleActions.deleteSalesSuperAdmin),
        exhaustMap((action)=>this.roviandaApi.delSalesOfSystem(action.salesIds,action.date).pipe(
            switchMap(()=>[saleActions.deleteSalesSuperAdminSuccess()]),
            catchError((err)=>[saleActions.deleteSalesSuperAdminFail({error:err.message})])
        ))
    ))

}
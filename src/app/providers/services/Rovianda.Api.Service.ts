import { HttpClient, HttpHandler, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn:"root"
})
export class RoviandaApiService{

    path:string = environment.basePath;
    constructor(private http:HttpClient){
    }

    getAllSales(page:number,peerPage:number,saleIds:Array<number>,date:string,folio:string){
        let parameters:HttpParams= new HttpParams();
        parameters= parameters.set("page",page.toString());
        parameters=parameters.set("peerPage",peerPage.toString());
        parameters=parameters.set("date",date);
        if(folio!=null){
        parameters=parameters.set("hint",folio);
        }
        return this.http.post(`${this.path}/sales-superadmin/sales`,{sales:saleIds},{params:parameters,observe:"response"});
    }

    getTicket(saleId:number){
        let httpOptions:Object={
        headers:new HttpHeaders({
            'Content-Type':'application/json'
        }),
        responseType:'text'
        }
        return this.http.get(`${this.path}/sale-ticket/${saleId}`,httpOptions);
    }

    delSalesOfSystem(salesIds:Array<number>,date:string){
        let params = new HttpParams();
        params = params.set("date",date);
        return this.http.post(`${this.path}/sales-superadmin/del`,salesIds,{params});
    }

    getReport(date:string){
        let params = new HttpParams();
        params = params.set("date",date);
        return this.http.post(`${this.path}/sales-superadmin/report-deleted`,{},{params,responseType:'blob'});
    }
}
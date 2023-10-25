import { HttpClient, HttpHandler, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Seller } from 'src/app/Models/User.Model';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn:"root"
})
export class RoviandaApiService{

    path:string = environment.basePath;
    constructor(private http:HttpClient){
    }

    getListOfClient(page:number,perPage:number,hint:string,type:string,sellerId:string){
        let httpParams:HttpParams= new HttpParams().append("page",page.toString()).append("perPage",perPage.toString()).append("type",type);
        if(hint!=null && hint!=""){
          httpParams=httpParams.append("hint",hint);
        }
        if(sellerId!="0" && sellerId!=null){
          httpParams=httpParams.append("sellerId",sellerId);
        }
        return this.http.get(`${this.path}/sae/list-clients`,{params:httpParams,observe:"response"});
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
    getDevolutionTicket(saleId:number){
        let httpOptions:Object={
        headers:new HttpHeaders({
            'Content-Type':'application/json'
        }),
        responseType:'text'
        }
        return this.http.get(`${this.path}/devolution-ticket/${saleId}`,httpOptions);
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

    cancelActivateSale(saleId:number){
        return this.http.put(`${this.path}/cancel-reactivate/${saleId}`,{});
    }

    paySale(saleId:number){
        let params:HttpParams = new HttpParams().set("saleId",saleId.toString());
        return this.http.patch(`${this.path}/salepayment`,null,{params});
    }

    getAllSellers(){
        return this.http.get<Seller[]>(`${this.path}/admin-sales/sellers`);
    }

    getReportSalesByType(request:{sellers:string[],format:string,type:string},dateStart:string,dateEnd:string){
        let params:HttpParams = new HttpParams().set("dateStart",dateStart).set("dateEnd",dateEnd);
        return this.http.post(`${this.path}/report/sales-types`,request,{params,responseType:"blob"});
    }

}


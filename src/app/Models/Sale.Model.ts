export interface Sale{
    saleId:number;
    date:string;
    hour?:string;
    amount:number;
    folio:string;
    seller:{
        name:string;
        email?:string;
    }
}
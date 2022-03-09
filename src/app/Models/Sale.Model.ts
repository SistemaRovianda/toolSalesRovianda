export interface Sale{
    saleId:number;
    date:string;
    hour?:string;
    amount:number;
    folio:string;
    statusStr:string,
    seller:{
        name:string;
        email?:string;
    },
    devolutionRequest:boolean,
    cancelRequest:boolean
} 
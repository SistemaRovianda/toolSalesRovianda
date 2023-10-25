import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RoviandaApiService } from 'src/app/providers/services/Rovianda.Api.Service';

@Component({
  selector: 'app-modal-cancel-reactivate',
  templateUrl: './modal-cancel-reactivate.component.html',
  styleUrls: ['./modal-cancel-reactivate.component.scss']
})
export class ModalCancelReactivateComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:{ typeOp:string,folio: string,amount:number,saleId: number},private roviandaApi:RoviandaApiService,
  public matDialogRef:MatDialogRef<ModalCancelReactivateComponent>) { }

  ngOnInit(): void {

  }
  isLoading:boolean=false;
  confirm(){
    if(this.data.typeOp!="saldar"){
    this.isLoading=true;
    this.roviandaApi.cancelActivateSale(this.data.saleId).subscribe(()=>{
      console.log("Actualizado");
      this.isLoading=false;
      this.matDialogRef.close(true);
    },(err)=>{
      this.isLoading=false;
      console.log("Error al actualizar");
    })
  }else{
    this.isLoading=true;
    this.roviandaApi.paySale(this.data.saleId).subscribe(()=>{
      console.log("Pagado");
      this.isLoading=false;
      this.matDialogRef.close(true);
    },(err)=>{
      this.isLoading=false;
      console.log("Error al actualizar");
    })
  }
}
  cancel(){
    this.matDialogRef.close();
  }

}

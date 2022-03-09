import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RoviandaApiService } from 'src/app/providers/services/Rovianda.Api.Service';

@Component({
  selector: 'app-modal-cancel-reactivate',
  templateUrl: './modal-cancel-reactivate.component.html',
  styleUrls: ['./modal-cancel-reactivate.component.scss']
})
export class ModalCancelReactivateComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private roviandaApi:RoviandaApiService,
  public matDialogRef:MatDialogRef<ModalCancelReactivateComponent>) { }

  ngOnInit(): void {

  }

  confirm(){
    this.roviandaApi.cancelActivateSale(this.data.saleId).subscribe(()=>{
      console.log("Actualizado");
      this.matDialogRef.close(true);
    },(err)=>{
      console.log("Error al actualizar");
    })
  }
  cancel(){
    this.matDialogRef.close();
  }

}

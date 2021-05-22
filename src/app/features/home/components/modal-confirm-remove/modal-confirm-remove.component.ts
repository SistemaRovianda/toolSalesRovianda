import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-confirm-remove',
  templateUrl: './modal-confirm-remove.component.html',
  styleUrls: ['./modal-confirm-remove.component.scss']
})
export class ModalConfirmRemoveComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<ModalConfirmRemoveComponent>) { }

  ngOnInit(): void {
  }

  accept(){
    this.dialogRef.close(true);
  }

  cancel(){
    this.dialogRef.close(false);
  }

}

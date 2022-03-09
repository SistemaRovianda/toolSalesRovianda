import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Seller } from 'src/app/Models/User.Model';
import { RoviandaApiService } from 'src/app/providers/services/Rovianda.Api.Service';

@Component({
  selector: 'app-modal-reports',
  templateUrl: './modal-reports.component.html',
  styleUrls: ['./modal-reports.component.scss']
})
export class ModalReportsComponent implements OnInit {

  constructor(private roviandaApiService:RoviandaApiService) { }
  sellers:Seller[]=[];
  types:FormControl;
  seller:FormControl;
  form:FormGroup;
  fromStr:string="";
  toStr:string="";
  get from(){
    return this.form.get("from");
  }
  get to(){
    return this.form.get("to");
  }
  isLoading:boolean=false;
  ngOnInit(): void {
    this.form= new FormGroup({
      from: new FormControl(null),
      to: new FormControl(null)
    });
    this.from.valueChanges.subscribe((newVal)=>{
      this.fromStr = this.parseDate( new Date(newVal));
    });
    this.to.valueChanges.subscribe((newVal)=>{
      this.toStr = this.parseDate(new Date(newVal));
    });
    this.types = new FormControl(null,Validators.required);
    this.types.valueChanges.subscribe((newVal)=>{
      console.log("NUevo valor: "+newVal);
    });

    this.seller = new FormControl();
    this.seller.valueChanges.subscribe((newVal)=>{
      if(newVal=="ALL"){
        this.sellersSelected=[];
      }else{
        if(!this.sellersSelected.includes(newVal)){
          this.sellersSelected.push(newVal);
        }else{
          this.sellersSelected=this.sellersSelected.filter(x=>x!=newVal);
        }
      }
    });

    this.roviandaApiService.getAllSellers().subscribe((sellers:Seller[])=>{
      this.sellers =[...sellers,{id:"ALL",name:"TODOS",cve:"",email:"",job:"",saeKey:1,status:"",warehouseKeySae:""}];
    });
  }
  parseDate(date:Date){
    let month=((date.getMonth()+1)<10)?'0'+(date.getMonth()+1):date.getMonth()+1;
    let day=(date.getDate()<10)?'0'+date.getDate():date.getDate();
    return date.getFullYear()+'-'+month+'-'+day;
  }
  sellersSelected:string[]=[];
  downloadPdf(){
    if(this.types.valid && this.form.valid){
    if(!this.isLoading){
      this.isLoading=true;
      let request ={
        format: "pdf",
        type: this.types.value,
        sellers: this.sellersSelected
      };
      this.roviandaApiService.getReportSalesByType(request,this.fromStr,this.toStr).subscribe((response)=>{
        this.isLoading=false;
        this.openReport(response);
      },(err)=>{
        this.isLoading=false;
      });
    }
  }
  }

  openReport(response:any){
    let file = new Blob([response], { type: 'application/pdf' });
    var fileURL = URL.createObjectURL(file);
    window.open(fileURL);
  }
  downloadExcel(){
    if(this.types.valid && this.form.valid){
    if(!this.isLoading){
      this.isLoading=true;
      let request ={
        format: "excel",
        type: this.types.value,
        sellers: this.sellersSelected
      };
      this.roviandaApiService.getReportSalesByType(request,this.fromStr,this.toStr).subscribe((response)=>{
        this.downloadFile(response);
        this.isLoading=false;
      },(err)=>{
        this.isLoading=false;
      });
    }
  }
  }

  downloadFile(data: any){
    var url = window.URL.createObjectURL(new Blob([data]));
     var a = document.createElement('a');
     document.body.appendChild(a);
     a.setAttribute('style', 'display: none');
     a.href = url;
     a.download = `Reporte de Ventas.xlsx`;
     a.click();
     window.URL.revokeObjectURL(url);
     a.remove(); // remove the element
   }

}

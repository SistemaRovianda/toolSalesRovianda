import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router} from "@angular/router";
import { AuthService } from 'src/app/providers/services/Auth.Service';
@Component({
  selector: "app-layout",
  templateUrl:  "./layout.component.html",
  styleUrls: ["./layout.component.scss"],
})
export class LayoutComponent implements OnInit {
  userNotValid:boolean=false;
  loading:boolean=false;
  constructor(private router: Router,private firebaseService:AuthService) {
  }
  
  ngOnInit() {

  }

  login(values:any){
    this.userNotValid=false;
    this.loading=true;
    if(values!=null){
      //console.log("Formulario valido");
      this.firebaseService.signIn(values.email,values.password).subscribe((uid)=>{
        if(uid==null){
          this.userNotValid=true;
        }else{
          //console.log("Login exitoso");
          this.router.navigate(["home"]);
        }
        this.loading=false;
      });
    }else{
      //console.log("Formulario no valido");
      this.loading=false;
    }
  }


}

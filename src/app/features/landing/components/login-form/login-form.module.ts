import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { RouterModule } from "@angular/router";
import { LoginFormComponent } from "./login-form.component";
import { HttpClientModule } from "@angular/common/http";

const COMMON_MODULES = [
  CommonModule,
  FlexLayoutModule,
  ReactiveFormsModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule
];

const COMMON_DECLARATIONS = [LoginFormComponent];

@NgModule({
  declarations: COMMON_DECLARATIONS,
  imports: [COMMON_MODULES, RouterModule],
  exports: COMMON_DECLARATIONS
})
export class LoginFormModule {}

export default { COMMON_DECLARATIONS, COMMON_MODULES };

import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output
} from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
@Component({
  selector: "login-form",
  templateUrl: "./login-form.component.html",
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: "loginForm"
})
export class LoginFormComponent implements OnInit {
  form: FormGroup;

  shouldHidePassword = true;

  @Output("onSubmit") submit = new EventEmitter();

  constructor(
    formBuilder: FormBuilder,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    this.form = formBuilder.group({
      email: ["", [Validators.email, Validators.required]],
      password: ["", [Validators.required]]
    });

    this.iconRegistry.addSvgIcon(
      "user",
      this.sanitizer.bypassSecurityTrustResourceUrl(
        "assets/images/user-regular.svg"
      )
    );

    this.iconRegistry.addSvgIcon(
      "padlock",
      this.sanitizer.bypassSecurityTrustResourceUrl(
        "assets/images/lock-alt-regular.svg"
      )
    );
  }

  ngOnInit() {}

  onSubmit() {
    if(this.form.valid){
    this.submit.emit(this.form.value);
    }else{
      this.submit.emit(null);
    }
  }

  shouldDisable() {
    return this.form.invalid;
  }

  togglePassword() {
    this.shouldHidePassword = !this.shouldHidePassword;
  }

  get passwordVisibilityIcon() {
    return this.shouldHidePassword ? "visibility_off" : "visibility";
  }

 
}

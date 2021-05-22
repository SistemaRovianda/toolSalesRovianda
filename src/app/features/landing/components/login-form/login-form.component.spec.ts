import { async } from '@angular/core/testing';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatIcon } from '@angular/material/icon';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { TranslateTestingModule } from 'ngx-translate-testing';
import { LoginFormComponent } from './login-form.component';
import fromModule from './login-form.module';
import { RouterTestingModule } from '@angular/router/testing';

const es = require('../../../../../assets/i18n/es.json');

describe('LoginFormComponent', () => {
  let spectator: Spectator<LoginFormComponent>;
  const createComponent = createComponentFactory({
    component: LoginFormComponent,
    imports: [
      fromModule.COMMON_MODULES,
      TranslateTestingModule.withTranslations('es', es),
      RouterTestingModule,
    ],
  });

  beforeEach(async(() => {
    spectator = createComponent();
    spectator.detectComponentChanges();
    spectator.detectChanges();
  }));

  it('should create', () => {
    const component = spectator.component;
    expect(component).toBeTruthy();
  });

  it('should require credentials', () => {
    const { component } = spectator;
    const emitter = spyOn(component._submit, 'emit').and.stub();

    component.submit();
    expect(emitter).not.toHaveBeenCalled();
  });

  describe('form validations', () => {
    it('form invalid when empty', () => {
      const component = spectator.component;
      component.form.controls.email.setValue('');
      component.form.controls.password.setValue('');
      expect(component.form.valid).toBeFalsy();
    });

    it('form should be valid', () => {
      const payload = {
        email: 'lorem@lorem.com',
        password: 'lorem',
        rememberUser: false,
      };
      const component = spectator.component;
      component.form.setValue(payload);
      expect(component.form.valid).toBeTruthy();
    });

    describe('email field validations', () => {
      it('should require email', () => {
        const component = spectator.component;
        const email = component.form.controls.email;
        email.setValue('');
        expect(email.hasError('required')).toBeTruthy();
      });

      it('should reject invalid email', () => {
        const component = spectator.component;
        const email = component.form.controls.email;
        email.setValue('lorem');
        expect(email.hasError('email')).toBeTruthy();
      });
    });

    describe('password field validations', () => {
      it('should require password', () => {
        const component = spectator.component;
        const password = component.form.controls.password;
        password.setValue('');
        expect(password.hasError('required')).toBeTruthy();
      });

      it("should toggle the password input's visibility on click", () => {
        const passwordInput = spectator.query('input[name="password"]');
        const icon = spectator.query(MatIcon);
        let inputType = passwordInput.attributes.getNamedItem('type').value;

        expect(inputType).toBe('password');

        spectator.click(icon._elementRef);
        spectator.detectComponentChanges();
        inputType = passwordInput.attributes.getNamedItem('type').value;
        expect(inputType).toBe('text');

        spectator.click(icon._elementRef);
        spectator.detectComponentChanges();
        inputType = passwordInput.attributes.getNamedItem('type').value;
        expect(inputType).toBe('password');
      });
    });

    describe('rememberUser checkbox behavior', () => {
      it('should be unchecked', () => {
        const checkbox = spectator.query(MatCheckbox);
        expect(checkbox.checked).toBeFalsy();
      });

      it('should be checked', () => {
        const checkbox = spectator.query(MatCheckbox);
        spectator.click(checkbox._inputElement);
        spectator.detectChanges();
        expect(checkbox.checked).toBeTruthy();
      });
    });
  });
});

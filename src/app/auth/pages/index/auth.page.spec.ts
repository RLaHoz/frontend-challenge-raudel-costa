import { SharedModule } from './../../../shared/shared.module';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Location } from '@angular/common';

import { AuthPage } from './auth.page';
import { AuthGuard } from 'src/app/guards/auth.guard';

describe('AuthPage', () => {
  let component: AuthPage;
  let fixture: ComponentFixture<AuthPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthPage ],
      imports: [
        IonicModule.forRoot(),
        ReactiveFormsModule,
        RouterTestingModule,
        SharedModule,
        HttpClientTestingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AuthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('name and password fields required at load', () => {
    //email field required
    let password = component.loginForm.controls['password'];
    let email = component.loginForm.controls['email'];

    expect(password.valid).toBeFalsy();
    expect(email.valid).toBeFalsy();

    password.setValue("");
    email.setValue("");

    expect(password.hasError('required')).toBeTruthy();
    expect(email.hasError('required')).toBeTruthy();

    //email format invalid
    email.setValue("test");
    expect(email.valid).toBeFalsy();

    //email format valid
    email.setValue("test@challenge.com");
    expect(email.valid).toBeTruthy();

  });

  it('name and password fields should have a correct format', () => {
    //email field required
    let password = component.loginForm.controls['password'];
    let email = component.loginForm.controls['email'];

    email.setValue("test");
    password.setValue("lite");

    expect(password.invalid).toBeTruthy();
    expect(email.valid).toBeFalsy();

    //email format valid
    email.setValue("test@challenge.com");
    expect(email.valid).toBeTruthy();

  });

  it('name and password fields have a correct format', () => {
    //email field required
    let password = component.loginForm.controls['password'];
    let email = component.loginForm.controls['email'];

    email.setValue("test@challenge.com");
    password.setValue("challenge");

    expect(password.hasError('minLength')).toBeFalsy();
    expect(password.valid).toBeTruthy();
    expect(email.valid).toBeTruthy();

  });


  it('should have login button disable when load', () => {
    //button disabled when form invalid
    let password = component.loginForm.controls['password'];
    let email = component.loginForm.controls['email'];
    const loginButton =
      fixture.debugElement.nativeElement.querySelector('ion-button');

    expect(loginButton.disabled).toBeTruthy();
  });

  it(' should have login button enable when form is valid', () => {
    //button disabled when form invalid
    let password = component.loginForm.controls['password'];
    let email = component.loginForm.controls['email'];
    const loginButton =
      fixture.debugElement.nativeElement.querySelector('ion-button');

    password.setValue("challenge");
    email.setValue("testing@challenge.com");
    fixture.detectChanges();
    expect(component.loginForm.valid).toBeTruthy();
    expect(loginButton.disabled).toBeFalsy();

  });

  it('should navigate to countries list when login buttons is pressed', () => {
    //button disabled when form invalid
    let password = component.loginForm.controls['password'];
    let email = component.loginForm.controls['email'];
    const loginButton =
      fixture.debugElement.nativeElement.querySelector('ion-button');

    password.setValue("challenge");
    email.setValue("testing@challenge.com");
    fixture.detectChanges();
    expect(component.loginForm.valid).toBeTruthy();
    expect(loginButton.disabled).toBeFalsy();

    loginButton.click();
    fixture.detectChanges();
    const location: Location = TestBed.inject(Location);
    fixture.whenStable().then(() => {
      expect(component.submitForm()).toHaveBeenCalled();
      expect(location.path()).toBe('/countries');
    });

  });
});

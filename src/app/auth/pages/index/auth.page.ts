import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit, OnDestroy {

  loginForm: FormGroup;
  subscription: Subscription;

  constructor(
    private router: Router,
    private authService: AuthService,
    private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  submitForm() {
    const { value : { email,  password }} = this.loginForm;
    this.subscription = this.authService.login(email, password).subscribe(data=>{
      if(data){
        this.router.navigate(['countries']);
      }
    })
  }

  initForm(){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
   })
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}

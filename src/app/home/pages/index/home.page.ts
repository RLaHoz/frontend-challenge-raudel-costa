import { AuthService } from './../../../shared/services/auth.service';
import { Router } from '@angular/router';
import { CoreService } from './../../../shared/services/core.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  pageTitle: any;
  showBtn: any;
  constructor(
    private auth: AuthService,
    private router: Router,
    private core: CoreService){}

  ngOnInit(): void {
    this.pageTitle = this.core.containerTitleSubj;
    this.showBtn = this.core.showBackBtnSubject;

  }

  navigate(){
    this.router.navigate(['countries']);
  }


  logOut(){
    this.auth.logOut().subscribe(result => {
      if(result){
        this.router.navigate(['/']);
      }
    });
  }

}

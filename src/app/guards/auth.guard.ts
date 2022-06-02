import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(private router: Router){}

  canLoad(): boolean {
      const user = localStorage.getItem('user');
      if(user) {
        return true;
      }
      this.redirectToLogin();
      return false;
  }

  redirectToLogin() {
    this.router.navigate(['/']);
  }
}

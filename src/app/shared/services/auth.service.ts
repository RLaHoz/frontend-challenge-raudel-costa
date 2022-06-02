import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(userEmail: string, password: string): Observable<boolean> {
    localStorage.setItem('user',userEmail);
    return of(true);
  }

  logOut(): Observable<boolean> {
    localStorage.removeItem('user');
    return of(true);
  }

}

// authentication.service.ts
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private router: Router){}

  private jwtHelper = new JwtHelperService();

  login(token: string): void {
    localStorage.setItem('token', token);
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/Login']);

  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  getClaims() {
    var token  = localStorage.getItem('token');
    return JSON.parse(window.atob(token!.split('.')[1]));
  }

  getUserRole(): string {
    const user = this.getClaims();
    return user["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
  }

  getUserId(): string{

    const user = this.getClaims();
    return user["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];

  }


}
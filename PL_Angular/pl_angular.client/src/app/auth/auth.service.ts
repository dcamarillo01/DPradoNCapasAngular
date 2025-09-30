import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('jwt_token'); // Replace 'authToken' with your token key
    return !!token; // Returns true if token exists, false otherwise
  }
}
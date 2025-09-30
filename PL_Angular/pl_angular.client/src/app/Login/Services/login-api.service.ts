import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Result } from '../../Modelos/Result';
import { Login } from '../../Modelos/Login/Login';

@Injectable({
  providedIn: 'root'
})
export class LoginApiService {

  constructor(private http: HttpClient) { }


  makeLogin(login: Login):Observable<Result>{

    console.log(login);

    const url = "http://localhost:5173/api/Login/LoginUser";

    return this.http.post<Result>(url,login);

  }


}


 
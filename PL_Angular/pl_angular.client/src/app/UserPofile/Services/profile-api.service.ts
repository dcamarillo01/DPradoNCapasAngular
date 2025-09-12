import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Result } from '../../Modelos/Result';
import { UserProfile } from '../../Modelos/Empleado/UserProfile';

@Injectable({
  providedIn: 'root'
})
export class ProfileAPIService {

  constructor(private http: HttpClient) { }



  crearCuenta(userProfile: UserProfile) : Observable<Result>{

    const url = "http://localhost:5173/api/UserProfile/Add";
    return this.http.post<Result>(url, userProfile);

  }


  getAccounts() : Observable<Result>{
    const url = "http://localhost:5173/api/UserProfile/GetAll";
    return this.http.get<Result>(url);
  }

  deactivateAccount(idUserProfile: number, Status: boolean) : Observable<Result>{

    const url = `http://localhost:5173/api/UserProfile/Deactivate/${idUserProfile}/${Status}`;
    return this.http.get<Result>(url);

  }


}

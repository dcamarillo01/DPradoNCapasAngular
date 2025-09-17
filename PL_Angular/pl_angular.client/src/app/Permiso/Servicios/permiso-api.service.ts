import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Result } from '../../Modelos/Result';
import { Permiso } from '../../Modelos/Permiso/Permiso';

@Injectable({
  providedIn: 'root'
})
export class PermisoApiService {

  constructor(private http: HttpClient) { }



  getPermisos(): Observable<Result> {

    const url = "http://localhost:5173/api/Permiso";
    return this.http.get<Result>(url);
  }

  addPermiso(permiso: Permiso) : Observable<Result>{

    const url = "http://localhost:5173/api/Permiso";
    return this.http.post<Result>(url, permiso);

  }


}

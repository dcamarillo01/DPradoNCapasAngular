import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Result} from '../../Modelos/Result';
import { Usuario } from '../../Modelos/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioAPIService {


  constructor(private http: HttpClient) { }




  getAll() : Observable<Result>{

    const url = 'http://localhost:5173/api/Usuario/GetAll';

    const body : Usuario = {

        nombre: "",
        apellidoPaterno: "",
        apellidoMaterno: "",
  rol: {
    idRol: 0
    }

  }

    return this.http.post<Result>(url, body);


}
}
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

        idUsuario: 0,
          nombre: "",
          apellidoPaterno: "",
          apellidoMaterno: "",
          rol: {
            idRol: 0
          }

    }
    return this.http.post<Result>(url, body);
}

  delete(idUsuario : number) : Observable<Result>{
    const url = `http://localhost:5173/api/Usuario/Delete/${idUsuario}`;
    return this.http.delete<Result>(url);
  }

  getById(idUsuario:number) : Observable<Result>{

    const url = `http://localhost:5173/api/Usuario/GetById/${idUsuario}`;
    return this.http.get<Result>(url);

  }
 

  
}


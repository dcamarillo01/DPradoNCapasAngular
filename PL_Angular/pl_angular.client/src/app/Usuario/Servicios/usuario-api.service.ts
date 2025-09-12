import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Result} from '../../Modelos/Result';
import { Usuario } from '../../Modelos/Usuario/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioAPIService {


  constructor(private http: HttpClient) { }

  body! : Usuario;

  getAll(nombre:string , apellidoPaterno:string, apellidoMaterno:string, idRol:number ) : Observable<Result>{

    const url = 'http://localhost:5173/api/Usuario/GetAll';

    if(nombre != null || apellidoPaterno != null ||apellidoMaterno != null ){
      this.body  = {

          idUsuario: 0,
          nombre: nombre,
          apellidoPaterno: apellidoPaterno, 
          apellidoMaterno: apellidoMaterno,
          rol: {
            idRol: idRol
          }
      }
    }else{
      this.body = {

        idUsuario: 0,
          nombre: "",
          apellidoPaterno: "", 
          apellidoMaterno: "",
          rol: {
            idRol: 0
          }

    }}

    
    return this.http.post<Result>(url, this.body);
}

  delete(idUsuario : number) : Observable<Result>{
    const url = `http://localhost:5173/api/Usuario/Delete/${idUsuario}`;
    return this.http.delete<Result>(url);
  }

  getById(idUsuario:number) : Observable<Result>{

    const url = `http://localhost:5173/api/Usuario/GetById/${idUsuario}`;
    return this.http.get<Result>(url);

  }

  setStatus(idUsuario:number, status: boolean) : Observable<Result>{

    const url = `http://localhost:5173/api/Usuario/SetStatus/${idUsuario}/${status}`
    return this.http.get<Result>(url);


  }

  registrarUsuario(Usuario: Usuario) : Observable<Result>{

    const url = "http://localhost:5173/api/Usuario/Add";
    const body = Usuario;
    return this.http.post<Result>(url, body);

  }

  actualizarUsuario(Usuario: Usuario, idUsuario: number) : Observable<Result>{

    const url = `http://localhost:5173/api/Usuario/Update/${idUsuario}`;
    const body = Usuario;
    return this.http.put<Result>(url, body);
  
  }
 

  
}


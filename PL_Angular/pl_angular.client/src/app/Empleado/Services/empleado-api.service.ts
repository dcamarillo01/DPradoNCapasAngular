import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Result} from '../../Modelos/Result';
import {Empleado} from '../../Modelos/Empleado/Empleado';


@Injectable({
  providedIn: 'root'
})
export class EmpleadoApiService {

  constructor(private http: HttpClient) { }

  body! : Empleado;

  getAll(nombre:string, apellidoPaterno:string, apellidoMaterno:string, idDepartamento:number): Observable<Result>{

    this.body = {

      nombre: nombre,
      apellidoPaterno: apellidoPaterno,
      apellidoMaterno: apellidoMaterno,
      departamento: {
        idDepartamento: idDepartamento
      }
    }

    const url = "http://localhost:5173/api/Empleado/GetAll";
    return this.http.post<Result>(url, this.body);
    
  }

  getById(idEmpleado : number){

    const url = `http://localhost:5173/api/Empleado/GetById/${idEmpleado}`;
    return this.http.get<Result>(url);


  }

  delete(idEmpleado : number) : Observable<Result>{

    const url = `http://localhost:5173/api/Empleado/Delete/${idEmpleado}`;
    return this.http.delete<Result>(url);

  }

  add(empleado: Empleado):Observable<Result>{

    const url = "http://localhost:5173/api/Empleado/Add";
    return this.http.post<Result>(url, empleado);


  }

  update(empleado: Empleado, idEmpleado: number):Observable<Result>{

    const url = `http://localhost:5173/api/Empleado/Update/${idEmpleado}`;
    return this.http.put<Result>(url, empleado)
  }


}

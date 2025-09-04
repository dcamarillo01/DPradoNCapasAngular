import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Result} from '../../Modelos/Result'; 
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DireccionApiService {

  constructor(private http: HttpClient) { }

  getEstados() : Observable<Result> {

    const url = 'http://localhost:5173/api/Direccion/Estados';

    return this.http.get<Result>(url);

  }

  getMunicipios(idEstado: number): Observable<Result>{

    const url = `http://localhost:5173/api/Direccion/Municipios/${idEstado}`;

    return this.http.get<Result>(url);
  }

  getColonias(idMunicipio: number): Observable<Result>{

    const url = `http://localhost:5173/api/Direccion/Colonias/${idMunicipio}`;
    return this.http.get<Result>(url);
  }


}

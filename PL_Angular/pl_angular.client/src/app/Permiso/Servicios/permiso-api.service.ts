import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Result } from '../../Modelos/Result';
import { Permiso } from '../../Modelos/Permiso/Permiso';
import { HistorialPermiso } from '../../Modelos/Permiso/Historial';

@Injectable({
  providedIn: 'root'
})
export class PermisoApiService {

  constructor(private http: HttpClient) { }



  getPermisos(): Observable<Result> {

    const url = "http://localhost:5173/api/Permiso/GetAll";
    return this.http.get<Result>(url);
  }

  addPermiso(permiso: Permiso) : Observable<Result>{

    const url = "http://localhost:5173/api/Permiso/SolicitarPermiso";
    return this.http.post<Result>(url, permiso);

  }

  aprovarRechazar(historial: HistorialPermiso): Observable<Result>{

    const url = "http://localhost:5173/api/Permiso/AprovarRechazar";
    return this.http.put<Result>(url,historial);

  }

  getHistorial(historial: HistorialPermiso) : Observable<Result>{

    const url = "http://localhost:5173/api/Permiso/Historial";
    return this.http.post<Result>(url,historial);

  }

  getBoss(): Observable<Result>{

    const url = "http://localhost:5173/api/Permiso/GetBoss";
    return this.http.get<Result>(url);

  }
  

}

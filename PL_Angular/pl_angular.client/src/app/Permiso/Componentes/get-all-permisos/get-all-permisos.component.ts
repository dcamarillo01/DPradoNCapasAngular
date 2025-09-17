import { Component, OnInit } from '@angular/core';
import {Permiso} from '../../../Modelos/Permiso/Permiso';
import {PermisoApiService} from '../../Servicios/permiso-api.service';
import { Result } from '../../../Modelos/Result';


@Component({
  selector: 'app-get-all-permisos',
  standalone: false,
  templateUrl: './get-all-permisos.component.html',
  styleUrl: './get-all-permisos.component.css'
})
export class GetAllPermisosComponent implements OnInit {

  permisos : Permiso[] = [];


  constructor(private apiService: PermisoApiService){}

  ngOnInit(): void {
    
    this.getPermisos();
  }

  getPermisos(){

    this.apiService.getPermisos().subscribe((data:Result)=>{

      this.permisos = data.objects;
    });


  }

}

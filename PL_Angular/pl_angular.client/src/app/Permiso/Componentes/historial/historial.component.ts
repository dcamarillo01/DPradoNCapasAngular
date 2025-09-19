import { Component, OnInit } from '@angular/core';
import { PermisoApiService } from '../../Servicios/permiso-api.service';
import { Result } from '../../../Modelos/Result';
import { HistorialPermiso } from '../../../Modelos/Permiso/Historial';
import { StatusPermiso } from '../../../Modelos/Permiso/StatusPermiso';
import { Empleado } from '../../../Modelos/Empleado/Empleado';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-historial',
  standalone: false,
  templateUrl: './historial.component.html',
  styleUrl: './historial.component.css',
})
export class HistorialComponent implements OnInit{

  permisos : HistorialPermiso[] = [];
  historial : HistorialPermiso = new HistorialPermiso();
  selectedStatus! : number;
  nombreAuthorizador!:string;
  busquedaAbierta : boolean = false;
  

  constructor(private apiService: PermisoApiService){}

  ngOnInit(): void {

    this.getHistorial();
    
  }

  getHistorial(){

    this.historial.statusPermiso = new StatusPermiso();
    if(this.selectedStatus == 2){
      this.historial.statusPermiso.descripcion = "Aprovado";
    }else if(this.selectedStatus == 3){
      this.historial.statusPermiso.descripcion = "Rechazado"; 
    }else{
      this.historial.statusPermiso.descripcion = "";
    }
    this.historial.aprovoRechazo = new Empleado();

    if(this.nombreAuthorizador != ""){
        this.historial.aprovoRechazo.nombre = this.nombreAuthorizador;
    }else{
      this.historial.aprovoRechazo.nombre = "";
    }

    this.apiService.getHistorial(this.historial).subscribe((data:Result)=>{

      this.permisos = data.objects;
      console.log(this.permisos);

    });

  }

  getNombre(event: Event){

    this.nombreAuthorizador = (event.target as HTMLInputElement).value;

  }

}

import { Component, OnInit } from '@angular/core';
import {Permiso} from '../../../Modelos/Permiso/Permiso';
import { PermisoApiService } from '../../Servicios/permiso-api.service';
import { Result } from '../../../Modelos/Result';
import { Empleado } from '../../../Modelos/Empleado/Empleado';
import { StatusPermiso } from '../../../Modelos/Permiso/StatusPermiso';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';




@Component({
  selector: 'app-permiso',
  standalone: false,
  templateUrl: './permiso.component.html',
  styleUrl: './permiso.component.css',
  
})
export class PermisoComponent implements OnInit {


  permiso : Permiso = new Permiso();
  
  fechasSolicitadas!: string;
  // fechaInicio = this.permiso.fechaInicio[0];
  // fechaFin = this.permiso.fechaInicio[1];
  


  constructor(private apiService: PermisoApiService){}



  ngOnInit(): void {
    
  }


 obtenerFechas(){

 

  console.log(this.fechasSolicitadas);
  const fechas = this.fechasSolicitadas.split(" to ");
  this.permiso.fechaInicio = fechas[0];
  this.permiso.fechaFin = fechas[1];

  console.log(this.permiso.fechaInicio);
  console.log(this.permiso.fechaFin);

 }


 solicitarPermiso(){


   this.permiso.empleado = new Empleado();
  this.permiso.empleadoAutorizador = new Empleado();
  this.permiso.statusPermiso = new StatusPermiso();
  this.permiso.empleado.idEmpleado = 1;
  this.permiso.empleadoAutorizador.idEmpleado = 1;
  this.permiso.statusPermiso.idStatusPermiso = 1;


  this.apiService.addPermiso(this.permiso).subscribe((data: Result) => {
    console.log(data);
    if(data.correct){
      alert("Se registro el permiso")
    }else{
      alert("No se registro el permiso")
    }

  });

 }

 onSubmit(f:NgForm){

  if(f.invalid){
    return;
  }else{
    this.solicitarPermiso();
  }

 }

}

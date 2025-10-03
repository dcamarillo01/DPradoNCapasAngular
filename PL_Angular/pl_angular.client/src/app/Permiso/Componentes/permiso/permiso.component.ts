import { Component, OnInit } from '@angular/core';
import {Permiso} from '../../../Modelos/Permiso/Permiso';
import { PermisoApiService } from '../../Servicios/permiso-api.service';
import { Result } from '../../../Modelos/Result';
import { Empleado } from '../../../Modelos/Empleado/Empleado';
import { StatusPermiso } from '../../../Modelos/Permiso/StatusPermiso';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../auth/servicio-authetication.service';



@Component({
  selector: 'app-permiso',
  standalone: false,
  templateUrl: './permiso.component.html',
  styleUrl: './permiso.component.css',
  
})
export class PermisoComponent implements OnInit {


  permiso : Permiso = new Permiso();
  jefes : Empleado[] = [];
  selectedJefe!: number;
  fechasSolicitadas!: string;
  
  //Token 
  token: any;
  decodedToken : any;
  userID : any;


  constructor(private apiService: PermisoApiService, private authService: AuthService){}

  ngOnInit(): void {
       //TOKEN
  this.fillBoss();
  this.permiso.empleadoAutorizador = new Empleado();

  }

 

  //OBTENER RANGO DE FECHAS
 obtenerFechas(){

  const fechas = this.fechasSolicitadas.split(" to ");
  this.permiso.fechaInicio = fechas[0];
  this.permiso.fechaFin = fechas[1];

 }


 // PETICION POST A PERMISO API
 solicitarPermiso(){

  this.permiso.empleado = new Empleado();
  this.permiso.empleadoAutorizador = new Empleado();
  this.permiso.statusPermiso = new StatusPermiso();
  this.permiso.empleado.idEmpleado = parseInt(this.authService.getUserId());
  this.permiso.empleadoAutorizador.idEmpleado = this.selectedJefe;
  this.permiso.statusPermiso.idStatusPermiso = 1;

  console.log(this.permiso);

  this.apiService.addPermiso(this.permiso).subscribe((data: Result) => {

    if(data.correct){
      Swal.fire({
        text: "Se registro el permiso",
        icon: "success"
      });
    }else{
      Swal.fire({
        text: "No se registro el permiso",
        icon: "error"
      });
    }

  });

 }

 // FORMULARIO SUBMIT
 onSubmit(f:NgForm){

  if(f.invalid){
    return;
  }else{
    this.solicitarPermiso();
    f.resetForm();
    f.reset();
  }

 }

 //LLenar Jefes 
 fillBoss(){

  this.apiService.getBoss().subscribe((data: Result)=>{

    this.jefes = data.objects;
    console.log(this.jefes);



  });

 }

}

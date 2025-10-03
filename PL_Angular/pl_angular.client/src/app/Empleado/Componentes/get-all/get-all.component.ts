import { Component, OnInit } from '@angular/core';
import {Empleado} from '../../../Modelos/Empleado/Empleado';
import {EmpleadoApiService} from '../../../Empleado/Services/empleado-api.service';
import { ProfileAPIService } from '../../../UserPofile/Services/profile-api.service';
import {Result} from '../../../Modelos/Result';
import {AuthService} from '../../../auth/servicio-authetication.service';


@Component({
  selector: 'app-get-all',
  standalone: false,
  templateUrl: './get-all.component.html',
  styleUrl: './get-all.component.css'
})
export class EmpleadoGetAllComponent implements OnInit{


  Empleados : Empleado[] = [];
  empleado: Empleado = new Empleado();
  

  // nombre: string = "";
  // apellidoPaterno: string = "";
  // apellidoMaterno: string = "";
  // idDepartamento: number = 0;

  selectedDepartamento!: number;

  nombre!: string;
  apellidoPaterno!: string;
  apellidoMaterno!: string;

  busquedaAbierta : boolean = false;


  constructor(private readonly apiService: EmpleadoApiService, private readonly profileApiService: ProfileAPIService , private readonly authService: AuthService){}

  ngOnInit(): void {

    this.getAll();
  }

    getNombre(event: Event){
    this.nombre = (event.target as HTMLInputElement).value;
    // this.usuario.nombre = this.nombre;

  }

  getApellidoPaterno(event: Event){
    this.apellidoPaterno = (event.target as HTMLInputElement).value;
    // this.usuario.nombre = this.nombre;

  }
  getApellidoMaterno(event: Event){
    this.apellidoMaterno = (event.target as HTMLInputElement).value;
    // this.usuario.nombre = this.nombre;

  }

  //Obtener Rol
  hasRole(role: string): boolean {
    return this.authService.getUserRole() === role;
  }

  getAll(){

    this.apiService.getAll(this.nombre,this.apellidoPaterno,this.apellidoMaterno,this.selectedDepartamento).subscribe((data:Result) =>{

      this.Empleados = data.objects;

    });
  }

  delete(idEmpleado: number){

    this.apiService.delete(idEmpleado).subscribe((data:Result) =>{

      if(data.correct){
        this.getAll();
        alert("Se elimino Empleado");

      }else{
        alert("No se pudo eliminar Empleado");
      }

    });

  }


  // crearCuenta(idEmpleado: number){

  //   const id = idEmpleado;
  //   const userName = this.empleado.nombre + this.empleado.apellidoPaterno! ;
  //   const email = this.empleado.nombre![0] + this.empleado.apellidoPaterno! + "@gmail.com";



  //   // this.profileApiService.crearCuenta(idEmpleado).subscribe((data:Result) =>{


  //   // })

  // }





}

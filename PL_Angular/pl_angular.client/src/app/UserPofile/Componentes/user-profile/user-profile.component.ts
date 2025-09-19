import { Component, OnInit } from '@angular/core';
import {ProfileAPIService} from '../../Services/profile-api.service';
import { ActivatedRoute } from '@angular/router';
import { UserProfile } from '../../../Modelos/Empleado/UserProfile';
import { Result } from '../../../Modelos/Result';
import { Empleado } from '../../../Modelos/Empleado/Empleado';
import { Rol } from '../../../Modelos/Usuario/Rol';
import { NgModel } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-user-profile',
  standalone: true,
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
  imports: [FormsModule, ReactiveFormsModule],
})
export class UserProfileComponent implements OnInit {


  user : UserProfile = new UserProfile();

  idEmpleado! : number;
  nombre! : string;
  apellido! : string;
  departamento! : string;
  emmail! : string;

  selectedRol!: number;



  constructor(private profileService: ProfileAPIService, private route: ActivatedRoute){}

  ngOnInit(): void {

    this.idEmpleado = this.route.snapshot.params['id'];
  this.user.empleado = new Empleado();

    this.user.empleado!.idEmpleado! = this.idEmpleado;
    this.nombre = this.route.snapshot.params['nombre'];
    this.apellido = this.route.snapshot.params['apellido'];
    this.departamento = this.route.snapshot.params['departamento'];

    this.user.userName = this.nombre + " " + this.apellido;
    this.user.email = this.nombre[0] + this.apellido + "@"+this.departamento+".com";
    console.log(this.user.email)
    this.user.rol = new Rol();

    
  }



  registrarUsuario(usuario: UserProfile){

    this.user.rol!.idRol! = this.selectedRol;
    console.log(this.selectedRol)


    this.profileService.crearCuenta(usuario).subscribe((data:Result)=>{

      if(data.correct){
        alert("Se registro Usuario");
      }else{
        alert("No se pudo registrar Usuario")
      }


    })}

}

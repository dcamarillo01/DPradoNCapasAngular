import { Component, OnInit } from '@angular/core';
import { Empleado} from '../../../Modelos/Empleado/Empleado';
import {Departamento} from '../../../Modelos/Empleado/Departamento';
import {Result} from '../../../Modelos/Result';
import {EmpleadoApiService} from '../../../Empleado/Services/empleado-api.service';
import { ActivatedRoute } from '@angular/router'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModel } from '@angular/forms';
import { FlatpickrModule} from 'angularx-flatpickr';





@Component({
  selector: 'app-empleado-form',
  standalone: true,
  templateUrl: './empleado-form.component.html',
  styleUrl: './empleado-form.component.css',
  imports: [FormsModule, ReactiveFormsModule, CommonModule,FlatpickrModule ],
})
export class EmpleadoFormComponent implements OnInit {


  empleado : Empleado = new Empleado();


  selectedDepartamento!: number;

  constructor(private readonly apiService: EmpleadoApiService,  private route: ActivatedRoute){

  }

  ngOnInit(): void {

    this.empleado.idEmpleado = this.route.snapshot.params["id"];

    if(this.empleado.idEmpleado! > 0){
      this.getById();
    }else{
      this.empleado = new Empleado();
    }

  }

  getById(){

    this.apiService.getById(this.empleado.idEmpleado!).subscribe((data:Result)=>{

      this.empleado = data.object;
      console.log(this.empleado);

      this.selectedDepartamento = this.empleado.departamento!.idDepartamento!;
      console.log(this.selectedDepartamento)

      }
    )
  }

  // =========================  APIS ============================== 

  registrarEmpleado(empleado: Empleado){

    empleado.departamento = new Departamento();
    empleado.departamento!.idDepartamento = this.selectedDepartamento;


    if(empleado.idEmpleado! > 0){

      this.apiService.update(empleado, empleado.idEmpleado!).subscribe((data:Result)=>{

        if(data.correct){
          alert("Se actualizo Empleado");
        }else{
          alert("No se pudo actualizar Empleado")
        }

      })

    }else{
      this.apiService.add(empleado).subscribe((data:Result)=>{

      if(data.correct){
        alert("Se registro Empleado");
      }else{
        alert("No se pudo registrar Empleado")
      }

    });
    }


  }


}

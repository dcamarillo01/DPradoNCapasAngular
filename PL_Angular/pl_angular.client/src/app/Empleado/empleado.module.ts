import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadoRoutingModule } from './empleado-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';


// COMPONENTES 
import { EmpleadoFormComponent } from './Componentes/empleado-form/empleado-form.component';
import { EmpleadoGetAllComponent } from './Componentes/get-all/get-all.component';



@NgModule({
  declarations: [
    EmpleadoFormComponent,
    EmpleadoGetAllComponent
  ],
  imports: [
    CommonModule,
    EmpleadoRoutingModule, FormsModule, ReactiveFormsModule,FlatpickrModule.forRoot()
  ]
})
export class EmpleadoModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PermisoRoutingModule } from './permiso-routing.module';
import { FlatpickrModule } from 'angularx-flatpickr';

// COMPONENTES 
import { PermisoComponent } from './Componentes/permiso/permiso.component';
import { GetAllPermisosComponent } from './Componentes/get-all-permisos/get-all-permisos.component';
import { HistorialComponent } from './Componentes/historial/historial.component';




@NgModule({
  declarations: [
    PermisoComponent,
    GetAllPermisosComponent,
    HistorialComponent
  ],
  imports: [
    CommonModule,
    PermisoRoutingModule,
    FormsModule, ReactiveFormsModule, FlatpickrModule.forRoot()
  ]
})
export class PermisoModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';


// => ------------------ COMPONENTES ------------------------

import { UsuarioGetAllComponent } from './Componentes/usuario-get-all/usuario-get-all.component';
import { UsuarioFormComponent} from './Componentes/usuario-form/usuario-form.component';



@NgModule({
  declarations: [
    UsuarioGetAllComponent,
    UsuarioFormComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    FormsModule, ReactiveFormsModule , FlatpickrModule.forRoot()
  ],

})
export class UsuarioModule { }

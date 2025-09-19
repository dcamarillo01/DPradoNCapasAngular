import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioGetAllComponent } from './Componentes/usuario-get-all/usuario-get-all.component';
import { UsuarioFormComponent } from './Componentes/usuario-form/usuario-form.component';
import { UsuarioModule } from './usuario.module';



const routes: Routes = [
  {path: 'UsuarioGetAll', component: UsuarioGetAllComponent},
  {path: 'UsuarioForm/:id', component: UsuarioFormComponent},
  {path: '', component: UsuarioGetAllComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }

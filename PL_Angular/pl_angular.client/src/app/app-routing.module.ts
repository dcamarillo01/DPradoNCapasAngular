import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioGetAllComponent} from './Usuario/Componentes/usuario-get-all/usuario-get-all.component';
import {UsuarioFormComponent} from './Usuario/Componentes/usuario-form/usuario-form.component';
import { EmpleadoGetAllComponent } from './Empleado/Componentes/get-all/get-all.component';
import {EmpleadoFormComponent} from './Empleado/Componentes/empleado-form/empleado-form.component';
import {UserProfileComponent} from './UserPofile/Componentes/user-profile/user-profile.component';
import { AccoutnsComponent } from './UserPofile/Componentes/accoutns/accoutns.component';
import {LoginComponent} from './Login/Componentes/login/login.component';
import { PermisoComponent } from './Permiso/Componentes/permiso/permiso.component';
import { GetAllPermisosComponent } from './Permiso/Componentes/get-all-permisos/get-all-permisos.component';
import { AppComponent } from './app.component';

const routes: Routes = [

  {path: 'UsuarioGetAll', component: UsuarioGetAllComponent},
  {path: 'UsuarioForm/:id', component: UsuarioFormComponent},
  {path: 'EmpleadoGetAll', component: EmpleadoGetAllComponent},
  {path: 'EmpleadoForm/:id', component: EmpleadoFormComponent},
  {path: 'UserProfile/:id/:nombre/:apellido/:departamento', component: UserProfileComponent},
  {path: 'Accoutns', component: AccoutnsComponent},
  {path: 'Login',component: LoginComponent},
  {path: 'Permiso', component: PermisoComponent},
  {path: 'Permisos',component: GetAllPermisosComponent},
  {path: '*', component: AppComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

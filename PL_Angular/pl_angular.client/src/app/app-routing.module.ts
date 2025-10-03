import { NgModule } from '@angular/core';
import { mapToCanActivate, RouterModule, Routes } from '@angular/router';
// import { UsuarioGetAllComponent} from './Usuario/Componentes/usuario-get-all/usuario-get-all.component';
// import {UsuarioFormComponent} from './Usuario/Componentes/usuario-form/usuario-form.component';
import { EmpleadoGetAllComponent } from './Empleado/Componentes/get-all/get-all.component';
// import {EmpleadoFormComponent} from './Empleado/Componentes/empleado-form/empleado-form.component';
import {UserProfileComponent} from './UserPofile/Componentes/user-profile/user-profile.component';
// import { AccoutnsComponent } from './UserPofile/Componentes/accoutns/accoutns.component';
import {LoginComponent} from './Login/Componentes/login/login.component';
// import { PermisoComponent } from './Permiso/Componentes/permiso/permiso.component';
// import { GetAllPermisosComponent } from './Permiso/Componentes/get-all-permisos/get-all-permisos.component';
// import { HistorialComponent } from './Permiso/Componentes/historial/historial.component';
import { AppComponent } from './app.component';
import { InicioComponent } from './Inicio/inicio/inicio.component';
import { AuthGuard } from './auth/guards/auth-guard.guard';

const routes: Routes = [

  // => ------------------------ NORMAL PATH ------------------------------------
  // {path: 'UsuarioGetAll', component: UsuarioGetAllComponent},
  // {path: 'UsuarioForm/:id', component: UsuarioFormComponent},
  // {path: 'EmpleadoForm/:id', component: EmpleadoFormComponent},
  // {path: 'UserProfile/:id/:nombre/:apellido/:departamento', component: UserProfileComponent},
  // {path: 'Accoutns', component: AccoutnsComponent},
  // {path: 'Permiso', component: PermisoComponent},
  // {path: 'Permisos',component: GetAllPermisosComponent},
  // {path: 'Historial', component: HistorialComponent},
  // {path: 'EmpleadoGetAll', component: EmpleadoGetAllComponent},

  // => ------------------------ LAZY PATH (LoadComponent) ------------------------------------
  // {path: 'UsuarioGetAll', loadComponent: () => import('./Usuario/Componentes/usuario-get-all/usuario-get-all.component')
  //   .then(m => m.UsuarioGetAllComponent)},
  // {path: 'UsuarioForm/:id', loadComponent: () => import('./Usuario/Componentes/usuario-form/usuario-form.component')
  //   .then(m => m.UsuarioFormComponent)},


  {path: 'UserProfile/:id/:nombre/:apellido/:departamento', loadComponent: () => import('./UserPofile/Componentes/user-profile/user-profile.component')
    .then(m => m.UserProfileComponent), canActivate:[AuthGuard], data: { roles: ['Administrador'] }},
  {path: 'Accoutns', loadComponent: () => import('./UserPofile/Componentes/accoutns/accoutns.component')
    .then(m => m.AccoutnsComponent), canActivate:[AuthGuard], data: { roles: ['Administrador'] }},
  {path: 'Login',component: LoginComponent},


  // => ------------------------ LAZY PATH (loadChildren) ------------------------------------
  {path: 'Usuario', loadChildren: () => import('./Usuario/usuario.module').then(m => m.UsuarioModule), canActivate: [AuthGuard], data: {roles: ['Administrador']}},
  {path: 'Permiso', loadChildren: () => import('./Permiso/permiso.module').then(m => m.PermisoModule), canActivate: [AuthGuard],data: {roles: ['Administrador','JefeDirecto','Empleado']}},
  {path: 'Empleado', loadChildren: () => import('./Empleado/empleado.module').then(m => m.EmpleadoModule), canActivate: [AuthGuard], data: { roles: ['Administrador', 'JefeDirecto'] }}, 
  {path: 'Inicio', component: InicioComponent, canActivate: [AuthGuard],data: {roles: ['Administrador','JefeDirecto','Empleado']}},
  {path: '', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

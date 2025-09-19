import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  // {path:'EmpleadoForm', loadComponent:() => import('./Empleado/Componentes/empleado-form/empleado-form.component')
  //   .then(m => m.EmpleadoFormComponent)},
  {path: 'UserProfile/:id/:nombre/:apellido/:departamento', loadComponent: () => import('./UserPofile/Componentes/user-profile/user-profile.component')
    .then(m => m.UserProfileComponent)},
  {path: 'Accoutns', loadComponent: () => import('./UserPofile/Componentes/accoutns/accoutns.component')
    .then(m => m.AccoutnsComponent)},
  {path: 'Login',component: LoginComponent},
  // {path: 'Permiso', loadComponent: () => import('./Permiso/Componentes/permiso/permiso.component')
  //   .then(m => m.PermisoComponent)},
  // {path: 'Permisos', loadComponent:() => import('./Permiso/Componentes/get-all-permisos/get-all-permisos.component')
  //   .then(m => m.GetAllPermisosComponent)},
  // {path: 'Historial', loadComponent: () => import('./Permiso/Componentes/historial/historial.component')
  //   .then(m => m.HistorialComponent)},


  // => ------------------------ LAZY PATH (loadChildren) ------------------------------------
  {path: 'Usuario', loadChildren: () => import('./Usuario/usuario.module').then(m => m.UsuarioModule)},
  {path: 'Permiso', loadChildren: () => import('./Permiso/permiso.module').then(m => m.PermisoModule)},
  {path: 'Empleado', loadChildren: () => import('./Empleado/empleado.module').then(m => m.EmpleadoModule)},

  {path: '*', component: AppComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

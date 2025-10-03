import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermisoComponent } from './Componentes/permiso/permiso.component';
import { GetAllPermisosComponent } from './Componentes/get-all-permisos/get-all-permisos.component';
import { HistorialComponent } from './Componentes/historial/historial.component';
import { AuthGuard } from '../auth/guards/auth-guard.guard';



const routes: Routes = [

  {path: 'Permiso', component: PermisoComponent },
  {path: 'Permisos',component: GetAllPermisosComponent, canActivate: [AuthGuard], data: { roles: ['JefeDirecto','Administrador'] }},
  {path: 'Historial', component: HistorialComponent,canActivate:[AuthGuard], data: { roles: ['Administrador'] }},
  {path: '', component: GetAllPermisosComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PermisoRoutingModule { }

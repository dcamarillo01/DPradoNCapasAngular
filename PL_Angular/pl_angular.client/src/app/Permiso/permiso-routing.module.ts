import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermisoComponent } from './Componentes/permiso/permiso.component';
import { GetAllPermisosComponent } from './Componentes/get-all-permisos/get-all-permisos.component';
import { HistorialComponent } from './Componentes/historial/historial.component';



const routes: Routes = [

  {path: 'Permiso', component: PermisoComponent},
  {path: 'Permisos',component: GetAllPermisosComponent},
  {path: 'Historial', component: HistorialComponent},
  {path: '', component: GetAllPermisosComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PermisoRoutingModule { }

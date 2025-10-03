import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadoFormComponent } from './Componentes/empleado-form/empleado-form.component';
import { EmpleadoGetAllComponent } from './Componentes/get-all/get-all.component';
import { AuthGuard } from '../auth/guards/auth-guard.guard';




const routes: Routes = [
  {path: 'EmpleadoForm/:id', component: EmpleadoFormComponent, canActivate:[AuthGuard], data: { roles: ['Administrador'] }},
  {path: 'EmpleadoGetAll', component: EmpleadoGetAllComponent, canActivate:[AuthGuard]} ,
  {path: '', component: EmpleadoGetAllComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpleadoRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadoFormComponent } from './Componentes/empleado-form/empleado-form.component';
import { EmpleadoGetAllComponent } from './Componentes/get-all/get-all.component';




const routes: Routes = [
  {path: 'EmpleadoForm/:id', component: EmpleadoFormComponent},
  {path: 'EmpleadoGetAll', component: EmpleadoGetAllComponent},
  {path: '', component: EmpleadoGetAllComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpleadoRoutingModule { }

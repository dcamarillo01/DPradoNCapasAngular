import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioGetAllComponent} from './Usuario/Componentes/usuario-get-all/usuario-get-all.component';
import { AppComponent } from './app.component';

const routes: Routes = [

  {path: 'UsuarioGetAll', component: UsuarioGetAllComponent},
  {path: '*', component: AppComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

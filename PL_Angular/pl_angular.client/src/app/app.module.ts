import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { UsuarioGetAllComponent } from './Usuario/Componentes/usuario-get-all/usuario-get-all.component';
import { UsuarioFormComponent } from './Usuario/Componentes/usuario-form/usuario-form.component';
import { FlatpickrModule } from 'angularx-flatpickr';
import { EmpleadoGetAllComponent } from './Empleado/Componentes/get-all/get-all.component';
import { EmpleadoFormComponent } from './Empleado/Componentes/empleado-form/empleado-form.component';
import { UserProfileComponent } from './UserPofile/Componentes/user-profile/user-profile.component';
import { AccoutnsComponent } from './UserPofile/Componentes/accoutns/accoutns.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UsuarioGetAllComponent,
    UsuarioFormComponent,
    EmpleadoGetAllComponent,
    EmpleadoFormComponent,
    UserProfileComponent,
    AccoutnsComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule, FormsModule, ReactiveFormsModule, FlatpickrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

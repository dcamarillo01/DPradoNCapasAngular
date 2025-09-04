import { Component , OnInit} from '@angular/core';
import {Usuario} from '../../../Modelos/Usuario';
import {Rol} from '../../../Modelos/Rol';
import {Direccion} from '../../../Modelos/Direccion';
import {Estado} from '../../../Modelos/Estado';
import {Municipio} from '../../../Modelos/Municipio';
import {Colonia} from '../../../Modelos/Colonia';
import {Result} from '../../../Modelos/Result';
import { FormsModule } from '@angular/forms';


import {UsuarioAPIService} from '../../Servicios/usuario-api.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-usuario-form',
  standalone: false,
  templateUrl: './usuario-form.component.html',
  styleUrl: './usuario-form.component.css'
})
export class UsuarioFormComponent implements OnInit {


  usuario :Usuario =  new Usuario();
  // usuario: Usuario = {} as Usuario;

  roles: Rol[] = [];
  estados : Estado[] = [];
  municipios : Municipio[] = [];
  colonias : Colonia[] = [];

  constructor(private apiService: UsuarioAPIService, private route: ActivatedRoute){}


ngOnInit(): void {

  this.usuario.idUsuario = this.route.snapshot.params["id"];
  this.getById();

}

  getById(){

    this.apiService.getById(this.usuario.idUsuario).subscribe((data: Result) => {

      this.usuario = data.object;
      console.log(this.usuario)


    })

  }




  

}

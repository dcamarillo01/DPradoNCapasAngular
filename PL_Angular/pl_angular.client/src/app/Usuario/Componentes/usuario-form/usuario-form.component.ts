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
import {DireccionApiService} from '../../../Direccion/Servicios/direccion-api.service';
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
  selectedEstado!: number;
  municipios : Municipio[] = [];
  selectedMunicipio!: number;
  colonias : Colonia[] = [];
  selectedColonia!: number;


  constructor(private apiService: UsuarioAPIService, private route: ActivatedRoute, private direccionApiService: DireccionApiService){}


ngOnInit(): void {

  this.usuario.idUsuario = this.route.snapshot.params["id"];

  if(this.usuario.idUsuario > 0){
      this.getById();
  }

  this.getEstados();


}

  getById(){

    this.apiService.getById(this.usuario.idUsuario).subscribe((data: Result) => {

      this.usuario = data.object;
      console.log(this.usuario)


    })

  }

  getEstados(){

    this.direccionApiService.getEstados().subscribe((data: Result) => {

      this.estados = data.objects;
      console.log(this.estados)
    })

  }

  fillMunicipios(idEestado : number){

    console.log(idEestado);

    this.direccionApiService.getMunicipios(idEestado).subscribe((data: Result) => {

      this.municipios = data.objects;
      console.log(this.municipios)


    })


  }

  fillColonias(idMunicipio: number){

    console.log(idMunicipio)
    this.direccionApiService.getColonias(idMunicipio).subscribe((data: Result) => {

      this.colonias = data.objects;
      console.log(this.colonias)


    })
  }




  

}

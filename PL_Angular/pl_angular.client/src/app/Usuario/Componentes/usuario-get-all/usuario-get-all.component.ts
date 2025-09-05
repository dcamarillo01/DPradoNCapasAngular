import { Component, OnInit } from '@angular/core';
import { UsuarioAPIService} from '../../Servicios/usuario-api.service';
import { Result} from '../../../Modelos/Result';
import { Usuario} from '../../../Modelos/Usuario';



@Component({
  selector: 'app-usuario-get-all',
  standalone: false,
  templateUrl: './usuario-get-all.component.html',
  styleUrl: './usuario-get-all.component.css'
})
export class UsuarioGetAllComponent implements OnInit {


  // usuario: Usuario = new Usuario();
  result! : Result;
  Usuarios : Usuario[] = [];




  constructor(private usuarioApi: UsuarioAPIService){}


  ngOnInit(): void {
    this.getAllUsuarios();
  }


  getAllUsuarios(){

    this.usuarioApi.getAll().subscribe((data: Result) => {

      console.log(data);
      this.result = data;
      this.Usuarios = this.result.objects;
      console.log(this.Usuarios)


    })

  }

  delete(idUsuario: number){
    this.usuarioApi.delete(idUsuario).subscribe((data: Result) =>{

      console.log(data);


    })
  }

  setStatus(idUsuario : number, Status:boolean){
    this.usuarioApi.setStatus(idUsuario, Status).subscribe((data: Result) =>{

      console.log(data);


    })
  }

}

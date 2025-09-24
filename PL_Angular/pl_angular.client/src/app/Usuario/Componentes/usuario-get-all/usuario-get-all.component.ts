import { Component, OnInit } from '@angular/core';
import { UsuarioAPIService} from '../../Servicios/usuario-api.service';
import { Result} from '../../../Modelos/Result';
import { Usuario} from '../../../Modelos/Usuario/Usuario';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuario-get-all',

  // => -------- STANDALONE COMPONENT -----------
  // standalone: true,
  // imports: [FormsModule, RouterModule, CommonModule],

  // => --------- Normal Component (Module) -------------
  standalone: false,
  templateUrl: './usuario-get-all.component.html',
  styleUrl: './usuario-get-all.component.css',
})
export class UsuarioGetAllComponent implements OnInit {


  // usuario: Usuario = new Usuario();
  result! : Result;
  Usuarios : Usuario[] = [];

  usuario : Usuario = new Usuario();
  selectedRol!: number;

  nombre!: string;
  apellidoPaterno!: string;
  apellidoMaterno!: string;

  busquedaAbierta : boolean = false;



  constructor(private usuarioApi: UsuarioAPIService){}



  ngOnInit(): void {
    this.getAllUsuarios();
  }

  // if(usuario.nombre != null || usuario.apellidoPaterno != null || usuario.apellidoMaterno != null || usuario.rol?.idRol){
  //   this.getAllUsuarios();
  // }

  getNombre(event: Event){
    this.nombre = (event.target as HTMLInputElement).value;
    // this.usuario.nombre = this.nombre;

  }

  getApellidoPaterno(event: Event){
    this.apellidoPaterno = (event.target as HTMLInputElement).value;
    // this.usuario.nombre = this.nombre;

  }
  getApellidoMaterno(event: Event){
    this.apellidoMaterno = (event.target as HTMLInputElement).value;
    // this.usuario.nombre = this.nombre;

  }

  

  getAllUsuarios(){

    this.usuarioApi.getAll(this.nombre,this.apellidoPaterno,this.apellidoMaterno,this.selectedRol).subscribe((data: Result) => {

      console.log(data);
      this.result = data;
      this.Usuarios = this.result.objects;
      console.log(this.Usuarios)


    })

  }

  delete(idUsuario: number){

    Swal.fire({
  title: "Deseas eliminar usuario?",
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: "Confirmar",
  denyButtonText: `Cancelar`
}).then((result) => {
  if (result.isConfirmed) {
    this.usuarioApi.delete(idUsuario).subscribe((data: Result) =>{

      if(data.correct){
        this.getAllUsuarios();
        Swal.fire({
                  title: "Delete Exitoso",
                  icon: "success"
                });
      }
    })

  } else if (result.isDenied) {

    Swal.fire("No se elimino el usuario");
  }
});


    
  }

  setStatus(idUsuario : number, Status:boolean){
    this.usuarioApi.setStatus(idUsuario, Status).subscribe((data: Result) =>{

      console.log(data);


    })
  }

}

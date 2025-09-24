import { Component , OnInit} from '@angular/core';
import {Usuario} from '../../../Modelos/Usuario/Usuario';
import {Rol} from '../../../Modelos/Usuario/Rol';
import {Direccion} from '../../../Modelos/Usuario/Direccion';
import {Estado} from '../../../Modelos/Usuario/Estado';
import {Municipio} from '../../../Modelos/Usuario/Municipio';
import {Colonia} from '../../../Modelos/Usuario/Colonia';
import {Result} from '../../../Modelos/Result';
import {UsuarioAPIService} from '../../Servicios/usuario-api.service';
import {DireccionApiService} from '../../../Direccion/Servicios/direccion-api.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';





@Component({
  selector: 'app-usuario-form',

  // => ------ STANDALONE COMPONENT ------------
  // standalone: true,
  // imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterModule,FlatpickrModule],

  // => ------ NORMAL COMPONENT(Using its own Module) ------------
  standalone: false,
  templateUrl: './usuario-form.component.html',
  styleUrl: './usuario-form.component.css',
  
})
export class UsuarioFormComponent implements OnInit {


  usuario :Usuario =  new Usuario();

  selectedRol!: number;

  roles: Rol[] = [];
  estados : Estado[] = [];
  selectedEstado!: number;
  municipios : Municipio[] = [];
  selectedMunicipio!: number;
  colonias : Colonia[] = [];
  selectedColonia!: number;

  imgPreview !: string;
base64textString!: string;
fieldTextType!: boolean;


  constructor(private apiService: UsuarioAPIService, private route: ActivatedRoute, private direccionApiService: DireccionApiService, private router: Router){}


ngOnInit(): void {

  this.usuario.idUsuario = this.route.snapshot.params["id"];

  this.getEstados();


  if(this.usuario.idUsuario > 0){
      this.getById();
  }else{

    this.usuario = new Usuario();
    this.usuario.direccion = new Direccion();
  }



}

  getById(){

    this.apiService.getById(this.usuario.idUsuario).subscribe((data: Result) => {

      this.usuario = data.object;
      this.imgPreview = this.usuario.imagen!;
      console.log(this.usuario)
      this.selectedEstado = this.usuario.direccion!.colonia!.municipio!.estado!.idEstado!;
      this.selectedMunicipio = this.usuario.direccion!.colonia!.municipio!.idMunicipio!;
      this.selectedColonia = this.usuario.direccion!.colonia!.idColonia!;

      this.fillMunicipios(this.selectedEstado);
      this.fillColonias(this.selectedMunicipio);

      this.selectedRol = this.usuario.rol!.idRol!;
      

    })

  }

  getEstados(){

    this.direccionApiService.getEstados().subscribe((data: Result) => {

      this.estados = data.objects;
      console.log(this.estados)
      console.log("si funciona peticion")
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

  
inputIMG(event: any) {

  let extensions = ["png", "jpg", "jpeg"];
  let imgExtension = event.target.files[0].name.split('.')[1]
  if (!extensions.includes(imgExtension)) {
    alert("Solo se permiten imagenes")
    event.target.value = null;
    this.imgPreview = "Imagenes/DefaultUser.png";
  }else{
     if (event.target.files && event.target.files[0]) {
    // this.imgPreview = URL.createObjectURL(event.target.files[0]);
    const reader = new FileReader();
    const img64 = reader.readAsDataURL(event.target.files[0]);
    reader.onload = () => {
        this.imgPreview = (reader.result as string).split(',')[1];
      };

  }
  }

 
}

  onSubmit(f: NgForm){

    if(f.invalid){
      return;
    }else{

      this.registrarUsuario(this.usuario);
    }

  }

  registrarUsuario(usuario: Usuario){

    
    usuario.direccion!.colonia = new Colonia();
    usuario.rol = new Rol();

    usuario.rol!.idRol! = this.selectedRol;
    
    usuario.imagenBase64 = this.imgPreview;


    
    console.log(usuario);
    console.log(this.selectedColonia);
    usuario.direccion!.colonia!.idColonia! = this.selectedColonia;
    console.log(usuario.direccion?.colonia?.idColonia)

    if(usuario.idUsuario > 0){

      this.apiService.actualizarUsuario(usuario,usuario.idUsuario).subscribe((data: Result) =>{

        console.log(data)
        if(data.correct){
          console.log("correcto")
          this.router.navigate(['/Usuario/UsuarioGetAll']);
          Swal.fire({
          title: "Actualizacion Exitoso",
          icon: "success"
        });
        }


      })

    }else{

      this.apiService.registrarUsuario(usuario).subscribe((data: Result) => {

      console.log(data);
      if(data.correct){
        this.router.navigate(['/Usuario/UsuarioGetAll']);
          Swal.fire({
          title: "Registro Exitoso",
          icon: "success"
        });
      }

    })
    }

  }

    // <!-- Switching method -->
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

}

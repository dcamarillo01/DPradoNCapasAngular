import { Component, OnInit } from '@angular/core';
import {Permiso} from '../../../Modelos/Permiso/Permiso';
import {PermisoApiService} from '../../Servicios/permiso-api.service';
import { Result } from '../../../Modelos/Result';
import { HistorialPermiso } from '../../../Modelos/Permiso/Historial';
import { Empleado } from '../../../Modelos/Empleado/Empleado';
import { StatusPermiso } from '../../../Modelos/Permiso/StatusPermiso';  
import Swal from 'sweetalert2';




@Component({
  selector: 'app-get-all-permisos',
  standalone: false,
  templateUrl: './get-all-permisos.component.html',
  styleUrl: './get-all-permisos.component.css',
})
export class GetAllPermisosComponent implements OnInit {

  permisos : Permiso[] = [];
  // permiso: Permiso = new Permiso();
  historial : HistorialPermiso = new HistorialPermiso();
  empleado: Empleado = new Empleado();



  constructor(private apiService: PermisoApiService){}

  ngOnInit(): void {
    
    this.getPermisos();
    
  }

  getPermisos(){

    this.apiService.getPermisos().subscribe((data:Result)=>{

      this.permisos = data.objects;
    });
  }

  aprovarRechazar(idPermiso:number, idStatusPermiso: number, observaciones: string){

    //  idHistorialPermiso!: number;
    //     permiso!: Permiso;
    //     fechaRevision! : string;
    //     statusPermiso!: StatusPermiso;
    //     observaciones!:string;
    //     aprovoRechazo!: Empleado;

    this.historial.permiso = new Permiso();
    this.historial.permiso.idPermiso = idPermiso;
    this.historial.statusPermiso = new StatusPermiso();
    this.historial.statusPermiso.idStatusPermiso = idStatusPermiso;
    this.historial.observaciones = observaciones;
    this.historial.aprovoRechazo = new Empleado();
    this.historial.aprovoRechazo.idEmpleado = 1;

    console.log(idPermiso);
    console.log(idStatusPermiso);
    console.log(observaciones);

    this.apiService.aprovarRechazar(this.historial).subscribe((data:Result)=>{

        if(data.correct){
            Swal.fire({
              title: "The Internet?",
              text: "That thing is still around?",
              icon: "success"
            });
        }else{
          Swal.fire({
              title: "The Internet?",
              text: "That thing is still around?",
              icon: "error"
            });
        }
    });
    


  }


  observaciones(idPermiso:number, idStatusPermiso:number){

    Swal.fire({
           title: "Observaciones",
    input: "text",
    inputAttributes: {
      autocapitalize: "off"
    }
    })
    .then(message => {

       this.aprovarRechazar(idPermiso, idStatusPermiso, message.value);
        

    });

}

  
  

}

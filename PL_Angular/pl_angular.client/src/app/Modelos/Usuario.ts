import {Rol} from './Rol';
import {Direccion} from './Direccion';


export class Usuario{
    
IdUsuario?: number;
Nombre?: string;
ApellidoPaterno?: string;
ApellidoMaterno?: string;
Email?: string;
Password?: string;
UserName?: string;
FechaNacimiento?: string;
Sexo?: string;
Telefono?: string;
Celular?: string;
CURP?: string;
Imagen?: string;
Status?: boolean;
Usuarios?: Usuario[];

//Propiedades de Navegacion
Rol?: Rol;
Direccion?: Direccion;


constructor(){}
}
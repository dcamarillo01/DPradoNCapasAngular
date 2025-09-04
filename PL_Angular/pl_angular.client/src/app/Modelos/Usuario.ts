import {Rol} from './Rol';
import {Direccion} from './Direccion';


export class Usuario{
    
idUsuario!: number;
nombre?: string;
apellidoPaterno?: string;
apellidoMaterno?: string;
email?: string;
password?: string;
userName?: string;
fechaNacimiento?: string;
sexo?: string;
telefono?: string;
celular?: string;
curp?: string;
imagen?: string;
status?: boolean;
usuarios?: Usuario[];

//Propiedades de Navegacion
rol?: Rol;
direccion?: Direccion;



}
import { Departamento } from "./Departamento";


export class Empleado{

    idEmpleado? : number;
    nombre? : string;
    apellidoPaterno? : string;
    apellidoMaterno? : string;
    fechaNacimiento? : string;
    rfc? : string;
    curp? : string;
    nss? : string;
    fechaIngreso? : string;
    departamento? : Departamento;
    salarioBase? : number;
    noFaltas? : number;
}

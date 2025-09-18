import { Empleado } from "../Empleado/Empleado"; 
import { StatusPermiso } from "./StatusPermiso";

export class Permiso{

    idPermiso!: number;
    empleado!: Empleado;
    fechaSolicitud!: string;
    fechaInicio!: string;
    fechaFin!: string;
    horaInicio!: string;
    horaFin!: string;
    motivo!: string;
    empleadoAutorizador!: Empleado;
    statusPermiso!: StatusPermiso;
    permisos!: Permiso[];

}


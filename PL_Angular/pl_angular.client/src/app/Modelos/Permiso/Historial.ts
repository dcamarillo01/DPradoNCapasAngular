import { Permiso } from "./Permiso";
import { StatusPermiso } from "./StatusPermiso";
import { Empleado } from "../Empleado/Empleado";

export class HistorialPermiso{

    idHistorialPermiso!: number;
    permiso!: Permiso;
    fechaRevision! : string;
    statusPermiso!: StatusPermiso;
    observaciones!:string;
    aprovoRechazo!: Empleado;

}


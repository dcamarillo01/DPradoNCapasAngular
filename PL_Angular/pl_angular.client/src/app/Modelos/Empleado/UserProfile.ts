import { Empleado } from "./Empleado";
import { Rol } from "../Usuario/Rol";



export class UserProfile{

    idUserProfile? : number;
    empleado? : Empleado;
    userName? : string;
    email? : string;
    passwordHash? : string;
    status? : boolean;
    rol? : Rol;

}

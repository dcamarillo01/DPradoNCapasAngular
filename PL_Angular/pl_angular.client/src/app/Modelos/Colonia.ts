import { Municipio } from "./Municipio";


export class Colonia{
    
  idColonia?: number;
  nombre?: string;
  codigoPostal?: string;
  colonias?: Colonia[];

  //Propiedades de Navegacion
  municipio?: Municipio;


}
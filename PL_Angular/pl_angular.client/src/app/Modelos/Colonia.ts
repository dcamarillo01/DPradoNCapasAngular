import { Municipio } from "./Municipio";


export class Colonia{
    
  IdColonia?: number;
  Nombre?: string;
  CodigoPostal?: string;
  Colonias?: Colonia[];

  //Propiedades de Navegacion
  Municipio?: Municipio;


}
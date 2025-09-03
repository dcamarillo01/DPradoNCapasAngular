import { Estado } from './Estado';


export class Municipio{
    
  IdMunicipio?: number;
  Nombre?: string;
  Municpios?: Municipio[];

  //Propiedades de Navegacion
  Estado?: Estado;

}
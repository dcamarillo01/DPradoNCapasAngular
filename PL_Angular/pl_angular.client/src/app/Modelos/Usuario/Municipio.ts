import { Estado } from './Estado';


export class Municipio{
    
  idMunicipio?: number;
  nombre?: string;
  municpios?: Municipio[];

  //Propiedades de Navegacion
  estado?: Estado;

}
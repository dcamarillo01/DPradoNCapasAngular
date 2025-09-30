import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{


  token!: string | null;
  decodedJWT!: any;
  rol!: string ;


  constructor(){}

  ngOnInit(): void {

    if(this.token != null){
    this.verificarToken();
    }else{
      this.token = localStorage.getItem('jwt_token');
    }
  }

  verificarToken(){

    
    this.decodedJWT = JSON.parse(window.atob(this.token!.split('.')[1]));
    this.rol = this.decodedJWT["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];

  
  }
 


}

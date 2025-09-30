import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  standalone: false,
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit{

  token: any;
  decodedToken : any;
  userName : any;

  ngOnInit(): void {

    this.token = localStorage.getItem("jwt_token");
    this.decodedToken = JSON.parse(window.atob(this.token!.split('.')[1]));
    this.userName = this.decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];
  }

}

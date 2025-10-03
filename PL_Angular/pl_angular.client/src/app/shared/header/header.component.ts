import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
// import { AuthService } from '../../auth/auth.service';
import {AuthService} from '../../auth/servicio-authetication.service';


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
  userData : any;



  constructor(private authService: AuthService, private cdr : ChangeDetectorRef) { }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }



  ngOnInit(): void {

     const tokenLocalStorage = localStorage.getItem("token");
    if(tokenLocalStorage){
    this.userData = JSON.parse(window.atob(tokenLocalStorage!.split('.')[1]));

    }


    this.authService.isLoggedIn();
    this.cdr.detectChanges();


  }

   logout(): void {
    this.authService.logout(); // Check token after removal
  }

  verificarToken(){

    
    // this.decodedJWT = JSON.parse(window.atob(this.token!.split('.')[1]));
    this.rol = this.decodedJWT["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];

  
  }

   hasRole(role: string): boolean {
    return this.authService.getUserRole() === role;
  }

 


}

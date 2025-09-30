import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

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
    return this.authService.isAuthenticated();
  }

  ngOnInit(): void {

     const tokenLocalStorage = localStorage.getItem("jwt_token");
    if(tokenLocalStorage){
      console.log(tokenLocalStorage)
      // this.userData = JSON.parse(tokenLocalStorage);
    this.userData = JSON.parse(window.atob(tokenLocalStorage!.split('.')[1]));

    }

      this.cdr.detectChanges();

  }

   logout(): void {
    localStorage.removeItem('jwt_token');
    this.isLoggedIn(); // Check token after removal
  }

  verificarToken(){

    
    // this.decodedJWT = JSON.parse(window.atob(this.token!.split('.')[1]));
    this.rol = this.decodedJWT["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];

  
  }
 


}

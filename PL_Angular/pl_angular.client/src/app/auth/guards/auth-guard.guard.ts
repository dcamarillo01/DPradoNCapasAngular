import { Injectable  } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../servicio-authetication.service';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: any): boolean {
    if (this.authService.isLoggedIn()) {

      const requiredRoles = route.data.roles;
      // const requiredRoles = this.route.data['roles'] || [];
      const userRole = this.authService.getUserRole();

      if (!requiredRoles.includes(userRole)) {
        this.router.navigate(['/Inicio']); // Redirect if unauthorized
        return false;
      }
      return true;
      

    } else {
      this.router.navigate(['/Login']);
      return false;
    }


  }


}

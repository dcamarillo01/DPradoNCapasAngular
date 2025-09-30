import { Component, OnInit } from '@angular/core';
import { LoginApiService } from '../../Services/login-api.service';
import {Result} from '../../../Modelos/Result';
import { Login } from '../../../Modelos/Login/Login';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'

})
export class LoginComponent implements OnInit {

  login: Login = new Login();
  token! : string;
  isDisabled : boolean = false;

  constructor(private loginApi: LoginApiService, private router: Router){}

  ngOnInit(): void {

    
  }


  makeLogin(){

      console.log(this.login);


    this.loginApi.makeLogin(this.login).subscribe((data:Result)=>{

      if(data.correct){

        this.token = data.object;
        localStorage.setItem('jwt_token', this.token);
        console.log(this.token);
        this.router.navigate(['/Inicio']);
      }

    });
    
  }

  disableButton() {
    this.isDisabled = true; // Disables the button
  }

  onSubmit(f: NgForm) {
        // stop here if form is invalid
        if (f.invalid) {
            return;
        }


        this.makeLogin();

        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(f.value, null, 4));
    }

}

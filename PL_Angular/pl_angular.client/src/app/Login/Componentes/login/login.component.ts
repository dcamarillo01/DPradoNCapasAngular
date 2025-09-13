import { Component, OnInit } from '@angular/core';
import { LoginApiService } from '../../Services/login-api.service';
import {Result} from '../../../Modelos/Result';
import { Login } from '../../../Modelos/Login/Login';


@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  login: Login = new Login();
  token! : string;

  constructor(private loginApi: LoginApiService){}

  ngOnInit(): void {
    
  }


  makeLogin(login: Login){

    this.loginApi.makeLogin(login).subscribe((data:Result)=>{

      if(data.correct){

        this.token = data.object;
        localStorage.setItem('jwt_token', this.token);
      }

    });
    
  }

}

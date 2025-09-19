import { Component, OnInit } from '@angular/core';
import { ProfileAPIService } from '../../Services/profile-api.service';
import { UserProfile } from '../../../Modelos/Empleado/UserProfile';
import { Result } from '../../../Modelos/Result';
import { NgModel, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-accoutns',
  standalone: true,
  templateUrl: './accoutns.component.html',
  styleUrl: './accoutns.component.css',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
})
export class AccoutnsComponent implements OnInit {

  userProfiles : UserProfile[] = [];


  constructor(private profileService: ProfileAPIService){}

  ngOnInit(): void {
    this.getAccounts();
  } 

  getAccounts(){

    this.profileService.getAccounts().subscribe((data:Result)=>{

      this.userProfiles = data.objects;
      console.log(this.userProfiles)

    })

  }


  deactivateAccount(idUserProfile: number, Status: boolean){

    this.profileService.deactivateAccount(idUserProfile, Status).subscribe((data:Result)=>{

      if(data.correct){
        alert("Se cambio status de cuenta");
      }else{
        alert("Ocurrio un error al cambiar estado de cuenta");
      }

    });

  }

}

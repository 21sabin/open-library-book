import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'

import { AuthenticationService } from '../../../services/authService';

@Component({
    selector: 'app-authentication',
    templateUrl:'./auth.component.html',
    styleUrls:['./auth.component.style.css']
     
})
export class AuthenticationComponent {
  constructor(private authService:AuthenticationService,private router:Router){}

  model:any={
    email:'',
    password:''
  }
  username:string="admin@gmail.com";
  password:string="admin";
  errorMsg:string;
  errorFlag:boolean=false;
    
  ngOnInit(){
   
  }

  login(form:NgForm){
      console.log(this.model);
      if(this.model.email===this.username && this.model.password===this.password){
          this.router.navigateByUrl("/dashboard")
      }else{
        console.log("error");
      }
  }

}
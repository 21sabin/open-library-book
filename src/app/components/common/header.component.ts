import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../../services';



@Component({
    selector: 'app-header',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.style.css']
     
})
export class HeaderComponent {
  constructor(
    private authService: AuthenticationService
  ){}

  ngOnInit(){
   
  }

  logout() {
    this.authService.logout();
  }


}
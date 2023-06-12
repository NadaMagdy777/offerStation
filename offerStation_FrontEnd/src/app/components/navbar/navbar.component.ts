import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  userdata: any;
  userName: any;

  constructor(private authenticationservice: AuthenticationService) {

    this.authenticationservice.userData.subscribe({
      next: data => {
        this.userdata = data;
        this.userName = this.userdata?
        this.userdata['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'] :''
      },
      error: error => console.log(error)
    })
  }

  ngOnInit() {
    if (localStorage.getItem('userToken')){
      this.authenticationservice.saveUserData()
      console.log();
      
    }
  }

  LogOut() { 
    this.authenticationservice.logout();
  }
  testToken(){
    this.authenticationservice.testToken().subscribe({
      next:data=>console.log(data),
      
    })
  }
}

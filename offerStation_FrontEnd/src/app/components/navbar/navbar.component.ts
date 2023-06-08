import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  userdata: any;

  constructor(private authenticationservice: AuthenticationService) {

  }

  ngOnInit() {
    if (localStorage.getItem('userToken'))
      this.authenticationservice.saveUserData()

    this.authenticationservice.userData.subscribe({
      next: data => this.userdata = data,
      error: error => console.log(error)
    })

  }
  
  LogOut() {
    this.authenticationservice.logout();
  }
}

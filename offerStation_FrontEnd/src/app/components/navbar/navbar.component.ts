import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/Category/category.service';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  userdata: any;
  userName: any;
  categoryList: any;
  categoryName: any;
  errorMessage: any;

  constructor(private ownerCategory:CategoryService,private authenticationservice: AuthenticationService ,private route:ActivatedRoute,private Router:Router) {

    this.authenticationservice.userData.subscribe({
      next: data => {
        this.userdata = data;
        this.userName = this.userdata ? this.userdata['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'] : ''
      },
      error: error => console.log(error)
    })
  }

  showAllOffers(catName:any){
    this.Router.navigate(['/owners/',catName]);
  }

  ngOnInit() {

    if (localStorage.getItem('userToken')){
      this.authenticationservice.saveUserData()
    }
    
    this.ownerCategory.GetAllCategory().subscribe({
      next:data=>
      {
        let dataJson=JSON.parse(JSON.stringify(data))
        console.log(data);
        this.categoryList=dataJson.data;
        for(let category of this.categoryList){
           this.categoryName=category.name;
           console.log(this.categoryName)
        }
      },
      error:error=>this.errorMessage=error
    })

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

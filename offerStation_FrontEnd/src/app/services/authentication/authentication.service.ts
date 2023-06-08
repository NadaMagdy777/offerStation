import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiResponce } from 'src/app/sharedClassesAndTypes/ApiResponce';
import { Base } from 'src/app/sharedClassesAndTypes/Base';
import { Owner } from 'src/app/sharedClassesAndTypes/Owner';
import { Supplier } from 'src/app/sharedClassesAndTypes/Supplier';
import { User } from 'src/app/sharedClassesAndTypes/User';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  constructor(private _httpClient: HttpClient,private router:Router) { }

  url = Base.apiUrl + 'Account';

  userData =new BehaviorSubject(null);

  login(formData: object): Observable<ApiResponce> {
    console.log(formData);
    console.log(this.url + `/login`, formData);
    
    return this._httpClient.post<ApiResponce>( this.url + `/login`, formData);
  }

  registerUser(user: User): Observable<ApiResponce> {
    return this._httpClient.post<ApiResponce>(this.url + `/Customer/register`, user);
  }
  registerOwner(owner: Owner): Observable<ApiResponce> {
    return this._httpClient.post<ApiResponce>(this.url + ``, owner);
  }
  registerSupplier(supplier: Supplier): Observable<ApiResponce> {
    return this._httpClient.post<ApiResponce>(this.url + ``, supplier);
  }

  saveUserData()
  {
    let encodedUserData= JSON.stringify(localStorage.getItem('userToken'))
    this.userData.next(jwtDecode(encodedUserData))
    // this.router.navigate(['login']);
  }

  logout()
  {
    localStorage.removeItem('userToken');
    this.userData.next(null)
  }

}

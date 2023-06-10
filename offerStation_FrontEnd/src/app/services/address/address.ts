import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { city } from 'src/app/sharedClassesAndTypes/city';
import { Base } from 'src/app/sharedClassesAndTypes/Base';

@Injectable({
  providedIn: 'root'
})
export class AddressServiceService {

  _url =  Base.apiUrl + 'Address';
  errorMessage: any;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) { }

  GetAllCities() {
    return this.http.get(this._url + "/cities").pipe(catchError((err: any) => {
      return throwError(() => err.message || "Server Error");
    }));
  }

  GetCustomerAdresses(ApplicationUserId: string) {
    return this.http.get(`http://localhost:59638/api/Address?ApplicationUserId=` + ApplicationUserId).pipe(catchError((err: any) => {
      return throwError(() => err.message || "Server Error");
    }));
  }

}

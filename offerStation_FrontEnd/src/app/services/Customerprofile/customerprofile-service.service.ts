import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Base } from 'src/app/sharedClassesAndTypes/Base';
import { Customer } from 'src/app/sharedClassesAndTypes/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerprofileService {

  private hosturl = Base.apiUrl;
  private apiURL = Base.apiUrl + 'Customer';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  GetCustomerById(id: number): Observable<Customer> {
    return this.http.get<Customer>(`${this.apiURL}/id?id=${id}`).pipe(catchError((err) => {
      return throwError(() => err.message || "server error");
    }));
  }

  UpdateCustomerInfo(id: number, profileForm: any) {
    return this.http.put(`${this.apiURL}/id?id=${id}`, profileForm).pipe(catchError((err) => {
        return throwError(() => err.message || "server error");
      }));
  }

  GetAllOrdersByCustomerID(id: number) {
    return this.http.get(`${this.hosturl}Order/GetOrdersByUserID?id=` + id).pipe(catchError((err: any) => {
      return throwError(() => err.message || "Server Error");
    }));
  }

}

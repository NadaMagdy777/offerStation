import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Base } from 'src/app/sharedClassesAndTypes/Base';
import { Customer } from 'src/app/sharedClassesAndTypes/Customer';
import { CustomerEdit } from 'src/app/sharedClassesAndTypes/CustomerEdit';

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

  UpdateCustomerInfo(id: number, customer: any): Observable<CustomerEdit> {
    return this.http.put<CustomerEdit>(
      `${this.apiURL}/id?id=${id}`,
      JSON.stringify(customer),
      this.httpOptions)
      .pipe(catchError((err) => {
        return throwError(() => err.message || "server error");
      }));
  }

  GetAllOrdersByCustomerID(id: number) {
    return this.http.get(`${this.hosturl}Order/GetOrdersByUserID?id=` + id).pipe(catchError((err: any) => {
      return throwError(() => err.message || "Server Error");
    }));
  }
}

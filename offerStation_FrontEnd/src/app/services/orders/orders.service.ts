import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { ApiResponce } from 'src/app/sharedClassesAndTypes/ApiResponce';
import { Base } from 'src/app/sharedClassesAndTypes/Base';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  url = Base.apiUrl + 'Order';
  _ownerUrl = Base.apiUrl;
  constructor(private _httpClient: HttpClient) { }

  //Owner Product Crud Operations
  GetCustomerOrders(Customerid: number): Observable<ApiResponce> {
    return this._httpClient.get<ApiResponce>(`${this.url}/customerOrders?customerId=${Customerid}`).
      pipe(catchError((err: any) => {
        return throwError(() => err.message || "Server Error");
      }));
  }

  GetOwnerOrders(Ownerid: number): Observable<ApiResponce> {
    return this._httpClient.get<ApiResponce>(`${this.url}/ownerOrders?ownerId=${Ownerid}`).
      pipe(catchError((err: any) => {
        return throwError(() => err.message || "Server Error");
      }));
  }

}

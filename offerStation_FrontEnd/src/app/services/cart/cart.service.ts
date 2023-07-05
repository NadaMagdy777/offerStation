import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Base } from 'src/app/sharedClassesAndTypes/Base';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiURL = Base.apiUrl +'Cart';
  constructor(private http: HttpClient) { }
 AddProductToCart(newProduct:any): Observable<any> {
    return this.http.get<any>(this.apiURL + "/addProductToCart",newProduct).pipe(catchError((err) => {
      return throwError(() => err.message || "server error");
    }));
  }
  GetCartdetails(): Observable<any>{
    return this.http.get<any>(this.apiURL+"/GetCartDetails").pipe(catchError((err) => {
      return throwError(() => err.message || "server error");

    }));
  }
  RemoveProductToCart(productId:any): Observable<any>{
    return this.http.get<any>(this.apiURL + "/removeProductToCart?ProductId=" + productId).pipe(catchError((err) => {
      return throwError(() => err.message || "server error");
  }));
}
}

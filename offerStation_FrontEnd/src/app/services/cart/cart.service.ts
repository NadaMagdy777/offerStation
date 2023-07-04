import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Base } from 'src/app/sharedClassesAndTypes/Base';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiURL = Base.apiUrl + 'Owner';
  constructor(private http: HttpClient) { }
 AddOferrToCart(): Observable<any> {
    return this.http.get<any>(this.apiURL + "/Categories").pipe(catchError((err) => {
      return throwError(() => err.message || "server error");
      // console.log( this.http.get<any>(this.apiURL+"/Categories"))
    }));
  }
}

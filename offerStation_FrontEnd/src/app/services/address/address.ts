import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { city } from 'src/app/sharedClassesAndTypes/city';

@Injectable({
  providedIn: 'root'
})
export class AddressServiceService {
  
  _url: string = 'https://localhost:7017/api/Address';
  errorMessage: any;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  
  constructor(private http: HttpClient) {}

  GetAllDoctors(): Observable<city[]> {
    return this.http.get<city[]>(this._url+"/cities").pipe(
      catchError((err) => {
       
        return throwError(() => err.message || 'server error');
      })
    );
  }

}

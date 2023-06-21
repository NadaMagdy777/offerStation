import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { ApiResponce } from 'src/app/sharedClassesAndTypes/ApiResponce';
import { Base } from 'src/app/sharedClassesAndTypes/Base';
import { ownerCategoryWithOffers } from 'src/app/sharedClassesAndTypes/ownerCategoryWithOffers';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiURL = Base.apiUrl + 'Owner';
  private apiURLSup = Base.apiUrl + 'Supplier';

  constructor(private http: HttpClient) { }
  GetAllCategory(): Observable<ApiResponce> {
    return this.http.get<ApiResponce>(this.apiURL + "/Categories").pipe(catchError((err) => {
      return throwError(() => err.message || "server error");
      // console.log( this.http.get<any>(this.apiURL+"/Categories"))
    }));
  }
  GetOffersWithOwner(categoryName: string, WithoutPagination: string): Observable<ApiResponce> {
    return this.http.get<ApiResponce>(this.apiURL + "/All/Offers/filter/WithoutPagination?CategoryName=" + categoryName + "&sortBy=" + WithoutPagination).pipe(catchError((err) => {
      return throwError(() => err.message || "server error");
      //  console.log( this.http.get<any>(this.apiURL+"/Categories"))
    }));
  }

  ////////For Supplier
  GetAllSupplierCategory(): Observable<ApiResponce> {
    return this.http.get<ApiResponce>(this.apiURLSup  + "/Categories").pipe(catchError((err) => {
      return throwError(() => err.message || "server error");
      // console.log( this.http.get<any>(this.apiURL+"/Categories"))
    }));
  }

  GetOffersWithSupplier(categoryName: string, WithoutPagination: string): Observable<ApiResponce> {
    return this.http.get<ApiResponce>(this.apiURLSup + "/All/Offers/filter/WithoutPagination?CategoryName=" + categoryName + "&sortBy=" + WithoutPagination).pipe(catchError((err) => {
      return throwError(() => err.message || "server error");
      //  console.log( this.http.get<any>(this.apiURL+"/Categories"))
    }));
  }
}

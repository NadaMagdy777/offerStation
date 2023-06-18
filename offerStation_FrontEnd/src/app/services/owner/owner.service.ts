import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Base } from 'src/app/sharedClassesAndTypes/Base';
import { ApiResponce } from 'src/app/sharedClassesAndTypes/ApiResponce';
import { Observable, catchError, throwError } from 'rxjs';
import { OwnerDetails } from 'src/app/sharedClassesAndTypes/OwnerDetails';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  constructor(private _httpClient: HttpClient) { }

  url = Base.apiUrl + 'Owner';


  // Owner Products

  getAllProductsByOwnerId(id: number): Observable<any> {
    return this._httpClient.get<any>(this.url + "/AllProductsByOwnerID/id?ownerid=" + id);
  }

  GetProductDetails(id: number): Observable<ApiResponce> {
    return this._httpClient.get<ApiResponce>(`${this.url}/Product/id?id=${id}`).
      pipe(catchError((err: any) => {
        return throwError(() => err.message || "Server Error");
      }));
  }

  AddProduct(OwnerId: number, newProduct: any): Observable<ApiResponce> {
    return this._httpClient.post<ApiResponce>(`${this.url}/Product/id?ownerId=${OwnerId}`, newProduct).
      pipe(catchError((err: any) => {
        return throwError(() => err.message || "server error")
      }));
  }

  DeleteProduct(id: number): Observable<ApiResponce> {
    return this._httpClient.delete<ApiResponce>(`${this.url}/Product/id?id=${id}`).
      pipe(catchError((err: any) => {
        return throwError(() => err.message || "server error")
      }));
  }

  UpdateProduct(id: number, updatedProduct: any): Observable<ApiResponce> {
    return this._httpClient.put<ApiResponce>(`${this.url}/Product/id?id=${id}`, updatedProduct).
      pipe(catchError((err: any) => {
        return throwError(() => err.message || "server error")
      }));
  }

   // Owner Category
   
  getMenuCategorybyOwnerId(id: number): Observable<any> {
    return this._httpClient.get<any>(this.url + "/AllMenuCategoriesByOwnerId/id?id=" + id);
  }

  getProductsByCategoryId(id: number): Observable<any> {
    return this._httpClient.get<any>(this.url + "/AllProductsByMenuCategoryID/id?id=" + id);
  }

  getAllProductsByOwnerIdWithPagination(pgNum:number,pageSize:number,id: number): Observable<any> {

    return this._httpClient.get<any>(this.url + "/GetAllProductsByOwmerIDWithPagination/id?pageNumber="+pgNum+"&pageSize="+pageSize+"&ownerid="+ id);
  }
  getAllProductsByOwnerId(id: number): Observable<any> {

    return this._httpClient.get<any>(this.url + "/AllProductsByOwnerID/id?ownerid="+ id);
  }

  GetAllCustomerReviewsByOwnerId(id: number): Observable<any> {
    return this._httpClient.get<any>(this.url + "/AllCustomerReviewsByOwnerID/id?ownerid=" + id);
  }
  GetOwnerInfo(id: number): Observable<OwnerDetails> {
    return this._httpClient.get<OwnerDetails>(this.url + "/GetOwnerInfo?id=" + id);
  }
  GetAllOfferByOwnerId(id: number): Observable<any> {
    return this._httpClient.get<any>(this.url + "/GetAllOffersByOwnerId/id?id=" + id);
  }
}

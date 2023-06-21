import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { ApiResponce } from 'src/app/sharedClassesAndTypes/ApiResponce';
import { Base } from 'src/app/sharedClassesAndTypes/Base';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  url = Base.apiUrl + 'Supplier';
  constructor(private _httpClient: HttpClient) { }

  //Supplier Product Crud Operations
  GetAllProductsBySupplierId(id: number): Observable<any> {

    return this._httpClient.get<any>(this.url + "/allProducts/id?supplierId=" + id);
  }

  GetProductDetails(id: number): Observable<ApiResponce> {
    return this._httpClient.get<ApiResponce>(`${this.url}/Product/id?id=${id}`).
      pipe(catchError((err: any) => {
        return throwError(() => err.message || "Server Error");
      }));
  }

  //https://localhost:7017/api/Supplier/Product/id?supplierId=1
  AddProduct(supplierId: number, newProduct: any): Observable<ApiResponce> {
    return this._httpClient.post<ApiResponce>(`${this.url}/Product/id?supplierId=${supplierId}`, newProduct).
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

  GetMenuCategorybySupplierId(id: number): Observable<any> {
    return this._httpClient.get<any>(this.url + "/AllMenuCategoriesBySupplierId/id?id=" + id);
  }

  //Supplier Category Crud Operations


  GetCategoryDetails(id: number): Observable<ApiResponce> {
    return this._httpClient.get<ApiResponce>(`${this.url}/SupplierCategory/id?id=${id}`).
      pipe(catchError((err: any) => {
        return throwError(() => err.message || "Server Error");
      }));
  }


  AddCategory(supplierId: number, newCategory: any): Observable<ApiResponce> {
    return this._httpClient.post<ApiResponce>(`${this.url}/SupplierCategory/id?ownerId=${supplierId}`, newCategory).
      pipe(catchError((err: any) => {
        return throwError(() => err.message || "server error")
      }));
  }


  DeleteCategory(id: number): Observable<ApiResponce> {
    return this._httpClient.delete<ApiResponce>(`${this.url}/SupplierCategory/id?id=${id}`).
      pipe(catchError((err: any) => {
        return throwError(() => err.message || "server error")
      }));
  }


  UpdateCategory(id: number, updatedCategory: any): Observable<ApiResponce> {
    return this._httpClient.put<ApiResponce>(`${this.url}/SupplierCategory/id?id=${id}`, updatedCategory).
      pipe(catchError((err: any) => {
        return throwError(() => err.message || "server error")
      }));
  }

}

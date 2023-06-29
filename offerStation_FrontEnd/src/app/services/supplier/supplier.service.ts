import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { ApiResponce } from 'src/app/sharedClassesAndTypes/ApiResponce';
import { Base } from 'src/app/sharedClassesAndTypes/Base';
import { ProductsByMenuCategory } from 'src/app/sharedClassesAndTypes/ProductsByMenuCategory';


@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  url = Base.apiUrl + 'Supplier';
  _supplierUrl = Base.apiUrl;
  constructor(private _httpClient: HttpClient) { }

  //Supplier Product Crud Operations
  GetAllProductsBySupplierId(id: number): Observable<ApiResponce> {

    return this._httpClient.get<ApiResponce>(this.url + "/allProducts/id?supplierId=" + id)
      .pipe(catchError((err: any) => {
        return throwError(() => err.message || "server error")
      }));
  }

  getProductsByCategoryId(pageNumber: number, Pagesize: number, id: number): Observable<any> {
    return this._httpClient.get<any>(this.url + "/AllProductsByMenuCategoryIDWithPagination/id?pageNumber=" + pageNumber + "&pageSize=" + Pagesize + "&id=" + id);
  }

  GetMenuCategoiesBySupplierId(id: number): Observable<any> {
    return this._httpClient.get<any>(this.url + "/GetMenuCategoiesBySupplierId?supplierid=" + id);
  }

  GetAllProductsByMenuCategoryID(pageNumber: number, Pagesize: number, id: number): Observable<ProductsByMenuCategory> {
    return this._httpClient.get<ProductsByMenuCategory>(this.url + "/AllProductsByMenuCategoryIDWithPagination/id?pageNumber=" + pageNumber + "&pageSize=" + Pagesize + "&id=" + id)
  }

  allProductsBySupplierID(pageNumber: number, Pagesize: number, id: number): Observable<any> {
    return this._httpClient.get<any>(this.url + "/allProductsBySupplierID/id?pageNumber=" + pageNumber + "&pageSize=" + Pagesize + "&supplierId=" + id)
  }

  GetProductDetails(id: number): Observable<ApiResponce> {
    return this._httpClient.get<ApiResponce>(`${this.url}/Product/id?id=${id}`).
      pipe(catchError((err: any) => {
        return throwError(() => err.message || "Server Error");
      }));

  }

  AddProduct(supplierId: number, newProduct: any): Observable<ApiResponce> {
    return this._httpClient.post<ApiResponce>(`${this.url}/Product/id?supplierId=${supplierId}`, newProduct).
      pipe(catchError((err: any) => {
        return throwError(() => err.message || "server error")
      }));
  }

  GetSupplierInfo(id: number): Observable<any> {
    return this._httpClient.get<any>(this.url + "/GetSupplierInfo?id=" + id);
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

  //Supplier Category Crud Operations

  GetMenuCategorybySupplierId(id: number): Observable<ApiResponce> {
    return this._httpClient.get<ApiResponce>(`${this.url}/GetMenuCategoiesBySupplierId?supplierid=${id}`).
      pipe(catchError((err: any) => {
        return throwError(() => err.message || "server error")
      }));
  }

  GetCategoryDetails(id: number): Observable<ApiResponce> {
    return this._httpClient.get<ApiResponce>(`${this._supplierUrl}SupplierMenuCategory/id?id=${id}`).
      pipe(catchError((err: any) => {
        return throwError(() => err.message || "Server Error");
      }));
  }

  AddCategory(supplierId: number, newCategory: any): Observable<ApiResponce> {
    return this._httpClient.post<ApiResponce>(`${this._supplierUrl}SupplierMenuCategory/id?ownerId=${supplierId}`, newCategory).
      pipe(catchError((err: any) => {
        return throwError(() => err.message || "server error")
      }));
  }

  DeleteCategory(id: number): Observable<ApiResponce> {
    return this._httpClient.delete<ApiResponce>(`${this._supplierUrl}SupplierMenuCategory/id?id=${id}`).
      pipe(catchError((err: any) => {
        return throwError(() => err.message || "server error")
      }));
  }

  UpdateCategory(id: number, updatedCategory: any): Observable<ApiResponce> {
    return this._httpClient.put<ApiResponce>(`${this._supplierUrl}SupplierMenuCategory/id?id=${id}`, updatedCategory).
      pipe(catchError((err: any) => {
        return throwError(() => err.message || "server error")
      }));
  }

  GetAllOwnerReviewsbysupplierID(id: any): Observable<any> {
    return this._httpClient.get<any>(this.url + "/GetAllOwnerReviewsbysupplierID?supplierId=" + id).
      pipe(catchError((err: any) => {
        return throwError(() => err.message || "server error")
      }));
  }

}

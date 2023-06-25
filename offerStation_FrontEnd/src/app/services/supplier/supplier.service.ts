import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Base } from 'src/app/sharedClassesAndTypes/Base';
import { ProductsByMenuCategory } from 'src/app/sharedClassesAndTypes/ProductsByMenuCategory';



@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(private _httpClient: HttpClient) {}
  url = Base.apiUrl + 'Supplier';

  GetMenuCategoiesBySupplierId(id: number): Observable<any> {
    return this._httpClient.get<any>(this.url + "/GetMenuCategoiesBySupplierId?supplierid=" + id);
    
  }
  GetAllProductsByMenuCategoryID(pageNumber:number,Pagesize:number,id:number):Observable<ProductsByMenuCategory>
  {
    return this._httpClient.get<ProductsByMenuCategory>(this.url+"/AllProductsByMenuCategoryIDWithPagination/id?pageNumber="+pageNumber+"&pageSize="+Pagesize+"&id="+id)
  }
  allProducts(id: number): Observable<any> {
    return this._httpClient.get<any>(this.url + "/allProducts/id?supplierId=" + id)
  }
  GetAllOwnerReviewsbysupplierID(id: number): Observable<any> {
    return this._httpClient.get<any>(this.url + "/GetAllOwnerReviewsbysupplierID?supplierId=" + id);
  }
  GetSupplierInfo(id: number): Observable<any> {
    return this._httpClient.get<any>(this.url + "/GetSupplierInfo?id=" + id);
  }
  
}

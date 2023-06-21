import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Base } from 'src/app/sharedClassesAndTypes/Base';
import { SupplierDetails } from 'src/app/sharedClassesAndTypes/SupplierDetails';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(private _httpClient: HttpClient) {}
  url = Base.apiUrl + 'Supplier';

  GetMenuCategoiesBySupplierId(id: number): Observable<any> {
    return this._httpClient.get<any>(this.url + "/GetMenuCategoiesBySupplierId?supplierid=" + id);
    
  }
  allProducts(id: number): Observable<any> {
    return this._httpClient.get<any>(this.url + "/allProducts/id?supplierId=" + id)
  }
  GetAllOwnerReviewsbysupplierID(id: number): Observable<any> {
    return this._httpClient.get<any>(this.url + "/GetAllOwnerReviewsbysupplierID?supplierId=" + id);
  }
  GetSupplierInfo(id: number): Observable<SupplierDetails> {
    return this._httpClient.get<SupplierDetails>(this.url + "/GetSupplierInfo?id=" + id);
  }
}

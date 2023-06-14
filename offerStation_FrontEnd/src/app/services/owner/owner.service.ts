import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Base } from 'src/app/sharedClassesAndTypes/Base';
import { ApiResponce } from 'src/app/sharedClassesAndTypes/ApiResponce';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  constructor(private _httpClient: HttpClient) { }

  url = Base.apiUrl + 'Owner';

  GetOwnerOffer(pageNumber:number,pagesize:number,ownerCategory:string,cityId:number,SortBy:string):Observable<ApiResponce> {
    console.log(ownerCategory)
    return this._httpClient.get<ApiResponce>( this.url + "/All/offers/filter/withPagination?PageNumber="+pageNumber+"&pageSize="+pagesize+"&category="+ownerCategory+"&cityId="+cityId+"&SortBy="+SortBy);
    
  }
  GetOwners(pageNumber:number,pagesize:number,ownerCategory:string,cityId:number,SortBy:string,Name:string):Observable<ApiResponce> {
    return this._httpClient.get<ApiResponce>( this.url + "/All/Filter/Pagination?PageNumber="+pageNumber+"&pageSize="+pagesize+"&category="+ownerCategory+"&cityId="+cityId+"&SortBy="+SortBy+"&name="+Name);
  }
  getMenuCategorybyOwnerId(id:number):Observable<any>
  {
    return this._httpClient.get<any>(this.url+"/AllMenuCategoriesByOwnerId/id?id="+id);
  }
  getProductsByCategoryId(id:number):Observable<any>
  {
return this._httpClient.get<any>(this.url+"/AllProductsByMenuCategoryID/id?id="+id);
  }
  getAllProductsByOwnerId(id:number):Observable<any>
  {

    return this._httpClient.get<any>(this.url+"/AllProductsByOwnerID/id?ownerid="+id);
  }
  GetAllCustomerReviewsByOwnerId(id:number):Observable<any>
  {
return this._httpClient.get<any>(this.url+"/AllCustomerReviewsByOwnerID/id?ownerid="+id);
  }
}

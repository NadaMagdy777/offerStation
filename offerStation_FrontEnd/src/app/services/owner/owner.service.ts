import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Base } from '../classes/Base';
import { ApiResponce } from '../classes/ApiResponce';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  constructor(private _httpClient: HttpClient) { }

  url = Base.apiUrl + 'ResturantOwner';

  GetProducts(pageNumber:number,pagesize:number,cityId:number,SortBy:string):Observable<ApiResponce> {
    return this._httpClient.get<ApiResponce>( this.url + "/All/Offers?PageNumber="+pageNumber+"&pageSize="+pagesize+"&cityId="+cityId+"&SortBy="+SortBy);
  }
}

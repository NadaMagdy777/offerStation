import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponce } from '../classes/ApiResponce';
import { Base } from '../classes/Base';

@Injectable({
  providedIn: 'root'
})
export class OwnerCategoryServiceService {

  constructor(private _httpClient: HttpClient) { }

  url = Base.apiUrl + 'Address';

  GetAllCategories():Observable<ApiResponce> {
    return this._httpClient.get<ApiResponce>( this.url + `/cities`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerprofileServiceService {

  constructor(private http: HttpClient) 
  {
    // private apiURL = "http://localhost:59638/api/";


   }
}

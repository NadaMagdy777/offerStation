import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Base } from 'src/app/sharedClassesAndTypes/Base';

@Component({
  selector: 'app-owners-index',
  templateUrl: './owners-index.component.html',
  styleUrls: ['./owners-index.component.css']

})
export class OwnersIndexComponent {
  catName: any;
  private apiURL = Base.apiUrl + 'Owner';
  constructor(private activatedroute: ActivatedRoute, private http: HttpClient) {
  }
  OnInit() {
    this.activatedroute.paramMap.subscribe(paramMap => {
      this.catName = paramMap.get('category');
      //console.log(typeof(this.catName));
      this.http.get(this.apiURL + this.catName).subscribe({
        next: data => {
          //console.log(data);
          // this.ResturantDetails=data
          console.log(data)
        },
        error: error => console.log(error)
      });

    })

  }
}

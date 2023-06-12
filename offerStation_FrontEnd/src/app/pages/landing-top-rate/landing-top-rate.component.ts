import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/Category/category.service';

@Component({
  selector: 'app-landing-top-rate',
  templateUrl: './landing-top-rate.component.html',
  styleUrls: ['./landing-top-rate.component.css']
})
export class LandingTopRateComponent {
  categoryList!:any
  errorMessage: any;
  categoryName :any;
  offerList: any;
  constructor(private ownerCategory:CategoryService,private route:ActivatedRoute){
  }
  ngOnInit(): void {

    this.ownerCategory.GetAllCategory().subscribe({
      next:data=>
      {
        let dataJson=JSON.parse(JSON.stringify(data))
        console.log(data);
        this.categoryList=dataJson.data;
       // this.categoryName=data.data.name
      },
      error:error=>this.errorMessage=error

    })
console.log(this.categoryName)
    this.ownerCategory.GetOffersWithOwner(this.categoryName,"Newest").subscribe({
      next:data=>
      {
        let dataJson=JSON.parse(JSON.stringify(data))
        console.log(dataJson);
        this.offerList=dataJson.data;
      },
      error:error=>this.errorMessage=error

    })
  }
}

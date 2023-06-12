import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/Category/category.service';

@Component({
  selector: 'app-landing-best-seller',
  templateUrl: './landing-best-seller.component.html',
  styleUrls: ['./landing-best-seller.component.css']
})
export class LandingBestSellerComponent {
  categoryList!:any
  errorMessage: any;
  categoryName :any;
  offerList: any;
  constructor(private ownerCategory:CategoryService,private route:ActivatedRoute, private Router:Router){
  }
  showAllOffers(catName:any){
    this.Router.navigate(['/owners/',catName]);
  }
  ngOnInit(): void {

    this.ownerCategory.GetAllCategory().subscribe({
      next:data=>
      {
        let dataJson=JSON.parse(JSON.stringify(data))
        console.log(data);
        this.categoryList=dataJson.data;
        for(let category of this.categoryList){
           this.categoryName=category.name;
           this.showAllOffers(this.categoryName)
           console.log(this.categoryName)
           this.ownerCategory.GetOffersWithOwner(this.categoryName,"MostPopular").subscribe({
            next:data=>
            {
              let dataJson=JSON.parse(JSON.stringify(data))
              console.log(dataJson);
              this.offerList=dataJson.data;
            },
            error:error=>this.errorMessage=error

          })
        }
      },
      error:error=>this.errorMessage=error

    })

  }
}

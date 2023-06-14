import { CategoryService } from './../../services/Category/category.service';
import { ownerCategory } from './../../sharedClassesAndTypes/ownerCategory';
import { Owner } from 'src/app/sharedClassesAndTypes/Owner';
import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ownerCategoryWithOffers } from 'src/app/sharedClassesAndTypes/ownerCategoryWithOffers';

@Component({
  selector: 'app-landing-newest',
  templateUrl: './landing-newest.component.html',
  styleUrls: ['./landing-newest.component.css']
})
export class LandingNewestComponent {
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

      //  // this.categoryList=dataJson.data;
      //   this.categoryName=data.data.name
      //   console.log(this.categoryName.data)

        this.categoryList=dataJson.data;
        for(let category of this.categoryList){
           this.categoryName=category.name;
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

      },
      error:error=>this.errorMessage=error

    })


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

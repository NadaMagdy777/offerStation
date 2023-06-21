import { Component } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { CategoryService } from 'src/app/services/Category/category.service';

@Component({
  selector: 'app-supplier-landing-top-rate',
  templateUrl: './supplier-landing-top-rate.component.html',
  styleUrls: ['./supplier-landing-top-rate.component.css']
})
export class SupplierLandingTopRateComponent {
  categoryList!:any
  errorMessage: any;
  categoryName :any;
  offerList: any;
  constructor(private SupplierCategory:CategoryService,private route:ActivatedRoute, private Router:Router){
  }
  showAllOffers(catName:any){
    this.Router.navigate(['/owners/',catName]);
  }
  ngOnInit(): void {

    this.SupplierCategory.GetAllSupplierCategory().subscribe({
      next:data=>
      {
        let dataJson=JSON.parse(JSON.stringify(data))
        console.log(data);
        this.categoryList=dataJson.data;
        for(let category of this.categoryList){
           this.categoryName=category.name;
           console.log(this.categoryName)
           this.SupplierCategory.GetOffersWithSupplier(this.categoryName,"Cheapest").subscribe({
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

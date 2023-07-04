import { Component, Input, OnInit } from '@angular/core';
import { OwnerService } from 'src/app/services/owner/owner.service';
import { OfferProducts } from 'src/app/sharedClassesAndTypes/product';

@Component({
  selector: 'app-offer-product-details',
  templateUrl: './offer-product-details.component.html',
  styleUrls: ['./offer-product-details.component.css']
})
export class OfferProductDetailsComponent  implements OnInit  
{

 
 product!:OfferProducts
 @Input() id:number=0
 @Input() Quantity:number=0
 @Input() Type:string=""
 constructor(private OwnerService:OwnerService) 
  {} 
 
  ngOnInit(): void {
  if(this.Type=="offer"){
    this.getOffers()

  }
  if(this.Type=="product"){
    this.getProduct
  }

 }


 getProduct(){
  
  this.OwnerService.GetProductDetails(this.id).subscribe((res) => {
    if (res.success) {
      let dataJson = JSON.parse(JSON.stringify(res))
      this.product=dataJson.data
      console.log(this.product)

    } else {
      console.log(res.message); 
    }
  })

}
getOffers(){
  this.OwnerService.GetOfferdetails(this.id).subscribe((res) => {
    if (res.success) {
      let dataJson = JSON.parse(JSON.stringify(res))
      this.product=dataJson.data
      console.log(this.product)

    } else {
      console.log(res.message); 
    }
  })

}
 
}

import { Component, Input, OnInit } from '@angular/core';
import { OwnerService } from 'src/app/services/owner/owner.service';
import { SupplierService } from 'src/app/services/supplier/supplier.service';
import { OfferProducts } from 'src/app/sharedClassesAndTypes/product';

@Component({
  selector: 'app-offer-products',
  templateUrl: './offer-products.component.html',
  styleUrls: ['./offer-products.component.css']
})
export class OfferProductsComponent implements OnInit {
  
  constructor(private OwnerService: OwnerService, private supplierService: SupplierService) {
  }
  @Input() id:number=0
  @Input() Type:string=""
  productList:OfferProducts[]=[]

  ngOnInit(): void {
    
    if(this.Type=="owner"){
      this.OwnerService.GetOfferProduct(this.id).subscribe({
        next: data => {
          let dataJson = JSON.parse(JSON.stringify(data))
          console.log(dataJson.data)
          this.productList = dataJson.data
          
  
        },
        error: error => { console.log(error) }
      }
  
      )
    }
    if(this.Type=="supplier"){
      this.supplierService.GetOfferProduct(this.id).subscribe({
        next: data => {
          let dataJson = JSON.parse(JSON.stringify(data))
          console.log(dataJson.data)
          this.productList = dataJson.data
          
  
        },
        error: error => { console.log(error) }
      }
  
      )
    }


  }

}

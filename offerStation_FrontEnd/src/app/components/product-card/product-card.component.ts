import { Component, Input, OnInit, Output } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  @Input() name:string=""
  @Input() offerId:number=0
  @Input() prefPrice:number=0
  @Input() afterPrice:number=0
  @Input() description:string=""
  @Input() SellerId:number=0
  @Input() Type:string=""
  @Input() sellerImage:any
  @Input() OfferImage:any
  hideElement:boolean=true
  display: string="none";

  openAddressModal() {
    this.display = 'block';
  }

  onCloseAddressHandled() {
    this.display = 'none';
  }
  // AddProductToCart(){

  // }
}

import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() name:string=""
  @Input() offerId:number=0
  @Input() prefPrice:number=0
  @Input() afterPrice:number=0
  @Input() description:string=""
  @Input() SellerId:number=0
  @Input() Type:string=""
  hideElement:boolean=true
  display: string="none";

  openAddressModal() {
    this.display = 'block';
  }

  onCloseAddressHandled() {
    this.display = 'none';
  }  

}

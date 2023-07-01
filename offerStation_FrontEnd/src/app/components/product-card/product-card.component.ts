import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() name:string=""
  @Input() prefPrice:number=0
  @Input() afterPrice:number=0
  @Input() description:string=""
  hideElement:boolean=true

  

}

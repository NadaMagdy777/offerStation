import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-user',
  templateUrl: './cart-user.component.html',
  styleUrls: ['./cart-user.component.css']
})
export class CartUserComponent {
  display = '';
    constructor(){

  }
  OnInit(){

  }
  onDeleteProduct(){
    this.display = 'none';

  }
}

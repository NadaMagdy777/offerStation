import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supplier-products',
  templateUrl: './supplier-products.component.html',
  styleUrls: ['./supplier-products.component.css']
})
export class SupplierProductsComponent implements OnInit {

  errorMessage: any;
  ProductList: any

  display = '';
  display1 = '';
  
  ngOnInit(): void {

  }

}

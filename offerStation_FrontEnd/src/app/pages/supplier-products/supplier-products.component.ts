import { Component, OnInit } from '@angular/core';
import { SupplierService } from 'src/app/services/supplier/supplier.service';


@Component({
  selector: 'app-supplier-products',
  templateUrl: './supplier-products.component.html',
  styleUrls: ['./supplier-products.component.css']
})
export class SupplierProductsComponent implements OnInit {
  MenuCategoryList:any;
  AllProducts:any;
  pageNumber:number=1
  totalItems:number=0
  pagesize:number=3
  ProductListByCategoryName:any;
  errorMessage: any;
  constructor(private supplier:SupplierService)
  {

  }
  ngOnInit(): void {

    this.supplier.GetMenuCategoiesBySupplierId(1002).subscribe({
      next:data=>
      {
        console.log(data);
        this.MenuCategoryList=data.data
        console.log("list"+this.MenuCategoryList);
      },
      error:error=>this.errorMessage=error
    })
  
}
  
  allProducts()
  {
    this.supplier.allProducts(1002).subscribe({
      next:data=>
      {
        console.log(data);
        this.AllProducts=data.data
        console.log("Products"+this.AllProducts);
      },
      error:error=>this.errorMessage=error
    })
  }
  getproductBycategoryId(id:number){
    if (id == 0) {
    console.log("all")
    } else {

      this.supplier.GetMenuCategoiesBySupplierId(id).subscribe({
        next: data => {
          console.log(data);
          this.ProductListByCategoryName = data.data
          console.log("list" + this.ProductListByCategoryName);
          console.log(id);
        },
        error: error => this.errorMessage = error

      })
    }
  }
  PageNumberChanged(value:any)
  {
console.log(value);
  }
}

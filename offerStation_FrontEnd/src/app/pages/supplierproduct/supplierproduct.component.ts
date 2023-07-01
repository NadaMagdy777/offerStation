import { Component, OnInit } from '@angular/core';
import { SupplierService } from 'src/app/services/supplier/supplier.service';

@Component({
  selector: 'app-supplierproduct',
  templateUrl: './supplierproduct.component.html',
  styleUrls: ['./supplierproduct.component.css']
})
export class SupplierproductComponent  implements OnInit{
  pageNumber:number=1
  totalItems:number=0
  pagesize:number=3
  selectedValue=0
  min=0;
  max=500;
  allProductsBySupplierID:any;
  MenucategoryList: any;
  ProductListByCategoryName: any
  errorMessage: any;
  constructor(private supplier: SupplierService) {
  }
  ngOnInit(): void {
    this.supplier.GetMenuCategoiesBySupplierId(1).subscribe({

      next: (data: { data: any; }) => {
        console.log(data);
        this.MenucategoryList = data.data
      
      },
      error: (error: any) => this.errorMessage = error

    });
    this.supplier.GetMinPriceoFProductBySupplierID(1).subscribe({

      next: data => {
        console.log(data);
        this.min = data.data;
        console.log("min "+this.min)
      },
      error: error => this.errorMessage = error

    });
    this.supplier.GetMaxPriceoFProductBySupplierID(1).subscribe({

      next: data => {
        console.log(data);
        this.max = data.data;
        console.log("max "+this.max)
      },
      error: error => this.errorMessage = error

    });

    }
    
    getAllProductsBySupplierId()
    {
    this.supplier.allProductsBySupplierID(this.pageNumber,this.pagesize,1).subscribe({

      next: (data: { data: any; }) => {
        console.log(data);
        this.ProductListByCategoryName = data.data
        console.log(this.ProductListByCategoryName);
      },
      error: (error: any) => this.errorMessage = error

    });
  
 
}

getproductBycategoryId(id:number)
{
  if (id == 0) {
   this.getAllProductsBySupplierId();
  } 
  else {
    this.supplier.getProductsByCategoryId(this.pageNumber,this.pagesize,id).subscribe({
      next: (data: { data: any; }) => {
        console.log(data);
        this.ProductListByCategoryName = data.data
        console.log("list" + this.ProductListByCategoryName);
        console.log(id);
      },
      error: (error: any) => this.errorMessage = error

    })
  }
}

getselectedprice(value:number)
{
console.log("seleceted "+ value);
this.supplier.GetProductsBySupplierIDAndPrice(1,value).subscribe({
next: data => {
  console.log(data);
  this.ProductListByCategoryName = data.data
  console.log("listprice" + this.ProductListByCategoryName);

},
error: error => this.errorMessage = error

})
}
PageNumberChanged(value:any){
this.pageNumber=value
    //this.supplier.getAllProductsByOwnerIdWithPagination(this.pageNumber,this.pagesize,1)
    this.pageNumber=1
    console.log("page"+value);
    console.log("mayar"+value);
}
}



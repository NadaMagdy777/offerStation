import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SupplierService } from 'src/app/services/supplier/supplier.service';

@Component({
  selector: 'app-supplierproduct',
  templateUrl: './supplierproduct.component.html',
  styleUrls: ['./supplierproduct.component.css']
})
export class SupplierproductComponent  implements OnInit{
  pageNumber:number=1
  totalItems:number=0
  pagesize:number=1
  selectedValue=0
  min=0;
  max=500;
  id:any
  allProductsBySupplierID:any;
  MenucategoryList: any;
  ProductListByCategoryName: any
  errorMessage: any;
  constructor(private supplier: SupplierService,private activatedroute:ActivatedRoute) {
  }
  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe(paramMap => {
      this.id = Number(paramMap.get('id'));

    });
    this.supplier.GetMenuCategoiesBySupplierId(this.id).subscribe({

      next: (data: { data: any; }) => {
        console.log(data);
        this.MenucategoryList = data.data
      
      },
      error: (error: any) => this.errorMessage = error

    });
    this.supplier.GetMinPriceoFProductBySupplierID(this.id).subscribe({

      next: data => {
        console.log(data);
        this.min = data.data;
        console.log("min "+this.min)
      },
      error: error => this.errorMessage = error

    });
    this.supplier.GetMaxPriceoFProductBySupplierID(this.id).subscribe({

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
    this.supplier.GetAllProductsBySupplierId(this.id).subscribe({

      next: (data: { data: any; }) => {
        console.log(data);
        this.ProductListByCategoryName = data.data
        console.log(this.ProductListByCategoryName);
      },
      error: (error: any) => this.errorMessage = error

    });
  
 
}

getproductBycategoryId(value:number)
{
  if (value== 0) {
   this.getAllProductsBySupplierId();
  } 
  else {
    this.supplier.GetAllProductsByMenuCategoryID(value).subscribe({
      next: (data: { data: any; }) => {
        console.log(data);
        this.ProductListByCategoryName = data.data
        console.log("list" + this.ProductListByCategoryName);
       
      },
      error: (error: any) => this.errorMessage = error

    })
  }
}

getselectedprice(value:number)
{
console.log("seleceted "+ value);
this.supplier.GetProductsBySupplierIDAndPrice(this.id,value).subscribe({
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
    // this.supplier.get(this.pageNumber,this.pagesize,1)
    this.pageNumber=1
    console.log("page"+value);
    console.log("mayar"+value);
}
}



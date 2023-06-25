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
  MenucategoryList: any;
  ProductListByCategoryName: any
  errorMessage: any;
  constructor(private supplier: SupplierService) {
  }
  ngOnInit(): void {
   
    
    this.supplier.allProducts(1002).subscribe({

      next: (data: { data: any; }) => {
        console.log(data);
        this.MenucategoryList = data.data
      },
      error: (error: any) => this.errorMessage = error

    });
    // this.supplier.getMenuCategorybyOwnerId(1).subscribe({

    //   next: (data: { data: any; }) => {
    //     console.log(data);
    //     this.MenucategoryList = data.data
    //   },
    //   error: (error: any) => this.errorMessage = error

    // })
 
}
getAllProductsByOwnerId() {
  this.supplier.allProducts(1002).subscribe({
    next: (data: { data: any; }) => {
      console.log(data);
      this.ProductListByCategoryName = data.data
      console.log("list" + this.ProductListByCategoryName);

    },
    error: error => this.errorMessage = error
  });
}
// getproductBycategoryId(id:number)
// {
//   this.supplier.GetAllProductsByMenuCategoryID(this.pageNumber,this.pagesize,id).subscribe({

//     next: data => {
//       console.log(data);
//       this.MenucategoryList = data
//     },
//     error: error => this.errorMessage = error

//   })
// }
// getproductBycategoryId(id: number) {
//   if (id == 0) {
//     this.getAllProductsByOwnerId();
//   } 
//   else {
//     this.supplier.GetMenuCategoiesBySupplierId(id).subscribe({
//       next: (data: { data: any; }) => {
//         console.log(data);
//         this.ProductListByCategoryName = data.data
//         console.log("list" + this.ProductListByCategoryName);
//         console.log(id);
//       },
//       error: (error: any) => this.errorMessage = error

//     })
//   }

// }
// getAllProductsBySupplierId() ////مفيش ata راجعه
// {
//   this.supplier.allProducts(1002).subscribe({

//     next: (data: { data: any; }) => {
//       console.log(data);
//       this.MenucategoryList = data.data
//     },
//     error: (error: any) => this.errorMessage = error

//   });
// }
PageNumberChanged(value:any){
this.pageNumber=value
    //this.supplier.getAllProductsByOwnerIdWithPagination(this.pageNumber,this.pagesize,1)
    this.pageNumber=1
    console.log("page"+value);
    console.log("mayar"+value);
}
}

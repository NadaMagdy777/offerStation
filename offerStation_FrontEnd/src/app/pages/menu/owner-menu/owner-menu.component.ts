import { Component, OnInit } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { OwnerService } from 'src/app/services/owner/owner.service';
import { Options, LabelType } from "@angular-slider/ngx-slider";

@Component({
  selector: 'app-owner-menu',
  templateUrl: './owner-menu.component.html',
  styleUrls: ['./owner-menu.component.css']

})
export class OwnerMenuComponent implements OnInit{
  pageNumber:number=1
  totalItems:number=0
  pagesize:number=3
  selectedValue=0
  min=0;
  max=500;
  MenucategoryList: any;
  ProductListByCategoryName: any
  errorMessage: any;
  constructor(private owner: OwnerService) {

    // this.owner.getMenuCategorybyOwnerId(1).subscribe({

    //   next: data => {
    //     console.log(data);
    //     this.MenucategoryList = data.data
    //   },
    //   error: error => this.errorMessage = error

    // })
  }
  ngOnInit(): void {
   
    this.owner.GetMinPriceoFProductByOwmerID(1).subscribe({

      next: data => {
        console.log(data);
        this.min = data.data;
        console.log("min "+this.min)
      },
      error: error => this.errorMessage = error

    });
    this.owner.GetMaxPriceoFProductByOwmerID(1).subscribe({

      next: data => {
        console.log(data);
        this.max = data.data;
        console.log("max "+this.max)
      },
      error: error => this.errorMessage = error

    });
      // this.owner.getAllProductsByOwnerIdWithPagination(this.pageNumber,this.pagesize,1).subscribe({

      //   next: data => {
      //     console.log(data);
      //     this.MenucategoryList = data.data
      //     console.log("menulist"+this.MenucategoryList)
      //   },
      //   error: error => this.errorMessage = error
  
      // });
      this.owner.getMenuCategorybyOwnerId(1).subscribe({

        next: data => {
          console.log(data);
          this.MenucategoryList = data.data;
          console.log("menulist"+this.MenucategoryList)
        },
        error: error => this.errorMessage = error
  
      })
   
  }
  getAllProductsByOwnerId() {
    this.owner.getAllProductsByOwnerIdWithPagination(this.pageNumber,this.pagesize,1).subscribe({
      next: data => {
        console.log(data);
        this.ProductListByCategoryName = data.data
        console.log("list" + this.ProductListByCategoryName);

      },
      error: error => this.errorMessage = error
    });
  }

  getproductBycategoryId(id: number) {
    if (id == 0) {
      this.getAllProductsByOwnerId();
    } else {

      this.owner.getProductsByCategoryId(id).subscribe({
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
  getselectedprice(value:number)
  {
console.log("seleceted "+ value);
this.owner.GetProductsByOwmerIDAndPrice(1,value).subscribe({
  next: data => {
    console.log(data);
    this.ProductListByCategoryName = data.data
    console.log("listprice" + this.ProductListByCategoryName);

  },
  error: error => this.errorMessage = error

})
  }
  PageNumberChanged(value:any){
    // this.pageNumber=value
    // this.owner.getAllProductsByOwnerIdWithPagination(this.pageNumber,this.pagesize,1)
    // this.pageNumber=1
    // console.log("page"+value);
    console.log("mayar"+value);

  }
}


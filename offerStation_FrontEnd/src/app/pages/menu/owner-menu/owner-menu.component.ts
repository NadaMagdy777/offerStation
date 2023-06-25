import { Component, OnInit } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { OwnerService } from 'src/app/services/owner/owner.service';


@Component({
  selector: 'app-owner-menu',
  templateUrl: './owner-menu.component.html',
  styleUrls: ['./owner-menu.component.css']

})
export class OwnerMenuComponent implements OnInit{
  pageNumber:number=1
  totalItems:number=0
  pagesize:number=3
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
          this.MenucategoryList = data;
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
  PageNumberChanged(value:any){
    // this.pageNumber=value
    // this.owner.getAllProductsByOwnerIdWithPagination(this.pageNumber,this.pagesize,1)
    // this.pageNumber=1
    // console.log("page"+value);
    console.log("mayar"+value);

  }
}


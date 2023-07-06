import { Component, OnInit } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { OwnerService } from 'src/app/services/owner/owner.service';
import { Options, LabelType } from "@angular-slider/ngx-slider";
import { ActivatedRoute } from '@angular/router';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-owner-menu',
  templateUrl: './owner-menu.component.html',
  styleUrls: ['./owner-menu.component.css']

})
export class OwnerMenuComponent implements OnInit{
  ProductpageNumber:number=1
  
  Productpagesize:number=3
  selectedValue=0
  selectedId=0
  id:any
  min=0;
  max=500;
  MenucategoryList: any;
  ProductListByCategoryName: any
  errorMessage: any;
  constructor(private owner: OwnerService,private activatedroute:ActivatedRoute, private imageService: ImageService) {

  }
  ngOnInit(): void {
   this.activatedroute.paramMap.subscribe(paramMap=>
    {
       this.id=Number(paramMap.get('id'));
    
    });
    
    this.owner.GetMinPriceoFProductByOwmerID(this.id).subscribe({

      next: data => {
        console.log(data);
        this.min = data.data;
        console.log("min "+this.min)
      },
      error: error => this.errorMessage = error

    });
    this.owner.GetMaxPriceoFProductByOwmerID(this.id).subscribe({

      next: data => {
        console.log(data);
        this.max = data.data;
        console.log("max "+this.max)
      },
      error: error => this.errorMessage = error

    });
     
      this.owner.getMenuCategorybyOwnerId(this.id).subscribe({

        next: data => {
          console.log(data);
          this.MenucategoryList = data.data;
          console.log("menulist"+this.MenucategoryList)
        },
        error: error => this.errorMessage = error
  
      })

      this.getAllProductsByOwnerId();
   
  }
  setIndex(selectedId:number){
    this.selectedId=selectedId  
    this.getproductBycategoryId(selectedId)
  }

  getAllProductsByOwnerId() {
    this.owner.getAllProductsByOwnerId(this.id).subscribe({
      next: data => {
        this.ProductListByCategoryName = data.data
        this.applayImages()

      },
      error: error => this.errorMessage = error
    });
  }

  getproductBycategoryId(id: number) {
    if (id == 0) {
      this.getAllProductsByOwnerId();
    } else {
     this.owner.getProductsByCategoryId(id).subscribe((res) => {
      if (res.success) {
        let dataJson = JSON.parse(JSON.stringify(res))
        this.ProductListByCategoryName=dataJson.data
        this.applayImages()

      } else {
        console.log(res.message); 
      }
    })
    this.ProductpageNumber = 1


    
    }

  }
  applayImages(){
    this.ProductListByCategoryName=this.ProductListByCategoryName.foreach((product:any)=>{
       product.image=this.imageService.base64ArrayToImage(product.image) 
    });
  }
  getselectedprice(value:number)
  {
    

    this.ProductListByCategoryName=this.ProductListByCategoryName.filter((product:any)=>{
      return product.price<=value
    });
    this.ProductpageNumber = 1
  

  }
  AddToCart()
  {
    
  }
  
  ProductPageNumberChanged(value: any) {
    this.ProductpageNumber = value
    

  }
}


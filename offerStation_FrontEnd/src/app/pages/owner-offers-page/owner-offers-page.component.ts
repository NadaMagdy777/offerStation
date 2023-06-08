import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressServiceService } from 'src/app/services/address';
import { OwnerService } from 'src/app/services/owner/owner.service';
import { Product } from 'src/app/sharedClassesAndTypes/product';

@Component({
  selector: 'app-owner-offers-page',
  templateUrl: './owner-offers-page.component.html',
  styleUrls: ['./owner-offers-page.component.css']
})
export class ownerOffersPageComponent implements OnInit {
 
  ProductList!:Product[]
  selectedcityId:number=0
  pageNumber:number=1
  totalItems!:number
  pagesize:number=4

  constructor(private OwnerService:OwnerService){
     
      
      
  
  }

  cityIdChanges(value:any){
    this.selectedcityId=value;
    this.getproduct(this.pageNumber,this.pagesize,this.selectedcityId," ")
    this.pageNumber=1


  }
  ngOnInit(): void {
    this.getproduct(1,this.pagesize,0,"")
  }
  
  getproduct(pgNum:number,pageSize:number,cityId:number,sortingBy:string){
    this.OwnerService.GetProducts(pgNum,pageSize,cityId,sortingBy).subscribe({
      next:data=>{
        let dataJson = JSON.parse(JSON.stringify(data))
        console.log(dataJson.data)
        this.totalItems=dataJson.data.itemsCount
        this.ProductList=dataJson.data.list

      },
      error:error=>{console.log(error)}
    }
      
      )
  }
  pageNumberChanged(value:any){
    this.pageNumber=value
    this.getproduct(this.pageNumber,this.pagesize,this.selectedcityId," ")
    this.pageNumber=1
    console.log(value);

  }

}

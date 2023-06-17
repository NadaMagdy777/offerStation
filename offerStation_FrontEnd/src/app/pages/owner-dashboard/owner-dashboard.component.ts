import { Component, OnInit } from '@angular/core';
import { OwnerAnalysisService } from 'src/app/services/owner/owner-analysis/owner-analysis.service';
import { AnalysisResult } from 'src/app/sharedClassesAndTypes/analysisResult';

@Component({
  selector: 'app-owner-dashboard',
  templateUrl: './owner-dashboard.component.html',
  styleUrls: ['./owner-dashboard.component.css']
})
export class OwnerDashboardComponent implements OnInit{

  constructor( private _ownerAnalysisServ: OwnerAnalysisService) { }

  totalCustomers:number=0
  totalOrders:number=0;
  totalProfits:number=0;
  totalProducts:number=0
  totalOffers:number=0;
  ownerId:number=1
  topOffers!:AnalysisResult[]
  topProduct!:AnalysisResult[]
  orderStatus!:AnalysisResult[]
  offersProductsOrdersCount!:AnalysisResult[]

  
  
  ngOnInit(): void {
    
  this.getTopoffers(this.ownerId) 
  this.getTopProducts(this.ownerId)
  this.getOrdersStatus(this.ownerId)
  this.getOffersProductOrdersCount(this.ownerId)
  this.GetCustomersCount(this.ownerId)
  this.GetOrdersCount(this.ownerId)
  this.GetProductsCount(this.ownerId)
  this.GetTotalProfits(this.ownerId)
  this.GetOffersCount(this.ownerId)






  }
  getOffersProductOrdersCount(ownerId:number){
    this._ownerAnalysisServ.GetOffersProductsCount(ownerId).subscribe({
      next:data=>{
        let dataJson = JSON.parse(JSON.stringify(data))
        this.offersProductsOrdersCount=dataJson.data
       
      },
      error:error=>{console.log(error)}
    }
      
      )

  }

  getOrdersStatus(ownerId:number){
    this._ownerAnalysisServ.GetOrdersStatus(ownerId).subscribe({
      next:data=>{
        let dataJson = JSON.parse(JSON.stringify(data))
        this.orderStatus=dataJson.data
       
      },
      error:error=>{console.log(error)}
    }
      
      )

  }
  getTopoffers(ownerId:number){
    this._ownerAnalysisServ.GetTopOffers(ownerId).subscribe({
      next:data=>{
        let dataJson = JSON.parse(JSON.stringify(data))
        this.topOffers=dataJson.data
       
      },
      error:error=>{console.log(error)}
    }
      
      )

  }
  getTopProducts(ownerId:number){
    this._ownerAnalysisServ.GetTopProduct(ownerId).subscribe({
      next:data=>{
        let dataJson = JSON.parse(JSON.stringify(data))
        this.topProduct=dataJson.data
       
      },
      error:error=>{console.log(error)}
    }
      
      )

  }
  GetCustomersCount(ownerId:number){
  
    this._ownerAnalysisServ.GetTotalCustomers(ownerId).subscribe({
      next:data=>{
        let dataJson = JSON.parse(JSON.stringify(data))
        this.totalCustomers=dataJson.data
       
      },
      error:error=>{console.log(error)}
    }
      
      )
  }
  GetOrdersCount(ownerId:number){
  
    this._ownerAnalysisServ.GetTotalOrders(ownerId).subscribe({
      next:data=>{
        let dataJson = JSON.parse(JSON.stringify(data))
        this.totalOrders=dataJson.data
       
      },
      error:error=>{console.log(error)}
    }
      
      )
    
  }
  GetTotalProfits(ownerId:number){
  
    this._ownerAnalysisServ.GetTotalProfit(ownerId).subscribe({
      next:data=>{
        let dataJson = JSON.parse(JSON.stringify(data))
        this.totalProfits=dataJson.data
       
      },
      error:error=>{console.log(error)}
    }
      
      )
    
  }

  GetProductsCount(ownerId:number){
  
    this._ownerAnalysisServ.GetProductCount(ownerId).subscribe({
      next:data=>{
        let dataJson = JSON.parse(JSON.stringify(data))
        this.totalProducts=dataJson.data
       
      },
      error:error=>{console.log(error)}
    }
      
      )
    
  }
  
  GetOffersCount(ownerId:number){
  
    this._ownerAnalysisServ.GetOffersCount(ownerId).subscribe({
      next:data=>{
        let dataJson = JSON.parse(JSON.stringify(data))
        this.totalOffers=dataJson.data
       
      },
      error:error=>{console.log(error)}
    }
      
      )
    
  }



}

import { Component, OnInit } from '@angular/core';
import { OwnerAnalysisService } from 'src/app/services/owner/owner-analysis/owner-analysis.service';

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
  
  
  
  ngOnInit(): void {
    
  this.GetCustomersCount(this.ownerId)
  this.GetOrdersCount(this.ownerId)
  this.GetProductsCount(this.ownerId)
  this.GetTotalProfits(this.ownerId)
  this.GetOffersCount(this.ownerId)





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

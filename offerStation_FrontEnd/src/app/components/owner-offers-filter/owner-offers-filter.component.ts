import { Component, OnInit } from '@angular/core';
import { AddressServiceService } from 'src/app/services/address';
import { city } from 'src/app/sharedClassesAndTypes/city';

@Component({
  selector: 'app-owner-offers-filter',
  templateUrl: './owner-offers-filter.component.html',
  styleUrls: ['./owner-offers-filter.component.css']
})
export class OwnerOffersFilterComponent implements OnInit{
  cities!:city[]
  selectedCityId:number=0


  constructor(private addressService:AddressServiceService){
     
      
      
  
  }
  setIndex(selectedcity:number){
    this.selectedCityId=selectedcity

    console.log(this.selectedCityId)
  }
  ngOnInit(): void {
    this.addressService.GetAllDoctors().subscribe({
      next:data=>{
        let dataJson = JSON.parse(JSON.stringify(data))
        this.cities=dataJson.data
        console.log(this.selectedCityId)

      },
      error:error=>{console.log(error)}
    }
      
      )
  }

}

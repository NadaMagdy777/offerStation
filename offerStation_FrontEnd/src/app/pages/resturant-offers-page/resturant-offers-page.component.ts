import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressServiceService } from 'src/app/services/address';

@Component({
  selector: 'app-resturant-offers-page',
  templateUrl: './resturant-offers-page.component.html',
  styleUrls: ['./resturant-offers-page.component.css']
})
export class ResturantOffersPageComponent implements OnInit {

  constructor(private addressService:AddressServiceService,private router:Router ,
    private route:ActivatedRoute){
     
      
      
  
  }
  ngOnInit(): void {
    this.addressService.GetAllDoctors().subscribe({
      next:data=>{
        console.log(data)
      },
      error:error=>{console.log(error)}
    }
      
      )
  }

}

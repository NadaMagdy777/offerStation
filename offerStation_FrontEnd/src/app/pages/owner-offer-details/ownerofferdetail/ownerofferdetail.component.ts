import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from 'src/app/services/image.service';
import { OwnerService } from 'src/app/services/owner/owner.service';
import { OwnerDetails } from 'src/app/sharedClassesAndTypes/OwnerDetails';

@Component({
  selector: 'app-ownerofferdetail',
  templateUrl: './ownerofferdetail.component.html',
  styleUrls: ['./ownerofferdetail.component.css']
})
export class OwnerofferdetailComponent implements OnInit {
  //OwnerOffer:OwnerDetails[]=[];
  OwnerOffer: any;
  id: any
  OfferpageNumber=1;
  Offerpagesize=6;
  errorMessage: any;
  ProductListofOffer:any
  constructor(private owner: OwnerService, private activatedroute: ActivatedRoute,private imageService: ImageService) { }
  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe(paramMap => {
      this.id = Number(paramMap.get('id'));

    });
    this.owner.GetAllOffersByOwnerId(this.id).subscribe({
      next: (data: any) => {
        console.log(data.data);
        this.OwnerOffer = data.data;
      },
      error: (error: any) => this.errorMessage = error,
    })
  }
  applayImages(){
    this.OwnerOffer=this.OwnerOffer.foreach((product:any)=>{
       product.image=this.imageService.base64ArrayToImage(product.image) 
    });
  }

  display = '';

  openModal(id:number) {
    this.display = 'block';
    console.log(id);
    this.owner.GetOfferDetatils(id).subscribe({
      next: (data: any) => {
        console.log(data.data);
        this.ProductListofOffer = data.data;
        this.ProductListofOffer=this.ProductListofOffer.foreach((product:any)=>{
          product.image=this.imageService.base64ArrayToImage(product.image) 

        
       });
      },
      error: (error: any) => this.errorMessage = error,
    })
  }
  
  closeModal() {
    this.display = 'none';
  }
  OfferPageNumberChanged(value:any){
     this.OfferpageNumber = value
    
  }
}

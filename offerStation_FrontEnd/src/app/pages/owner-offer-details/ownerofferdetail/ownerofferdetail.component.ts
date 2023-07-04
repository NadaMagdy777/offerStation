import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  pageNumber=1;
  pagesize=3;
  errorMessage: any;
  ProductListofOffer:any
  constructor(private owner: OwnerService, private activatedroute: ActivatedRoute) { }
  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe(paramMap => {
      this.id = Number(paramMap.get('id'));

    });
    this.owner.GetAllOffersByOwnerIdWithPagination(this.pageNumber,this.pagesize,this.id).subscribe({
      next: (data: any) => {
        console.log(data);
        this.OwnerOffer = data.data;
      },
      error: (error: any) => this.errorMessage = error,
    })
  }

  display = '';

  openModal(id:number) {
    this.display = 'block';
    console.log(id);
    this.owner.GetOfferDetatils(id).subscribe({
      next: (data: any) => {
        console.log(data);
        this.ProductListofOffer = data.data;
      },
      error: (error: any) => this.errorMessage = error,
    })
  }
  
  closeModal() {
    this.display = 'none';
  }
  PageNumberChanged(id:any){
    // this.pageNumber = value
    // this.getproduct(this.pageNumber, this.pagesize, this.OwnerCategory, this.selectedcityId, this.sortBy)
    // this.pageNumber = 1
    // console.log(value);
  }
}

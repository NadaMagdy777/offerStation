import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SupplierService } from 'src/app/services/supplier/supplier.service';

@Component({
  selector: 'app-supplieroffer',
  templateUrl: './supplieroffer.component.html',
  styleUrls: ['./supplieroffer.component.css']
})
export class SupplierofferComponent implements OnInit{
  supplieroffers:any;
  id:any;
  pageNumber:number=1
  pagesize:number=3
  ProductListofOffer:any

PageNumberChanged(value: number) {
  this.pageNumber = value
  this.supplier.GetAllOffersBySupplierIdWithPagination(this.pageNumber, this.pagesize,this.id)
  this.pageNumber = 1
  console.log(value);

}
  errorMessage: any;
  constructor(private supplier:SupplierService, private activatedroute: ActivatedRoute)
  {

  }

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe(paramMap => {
      this.id = Number(paramMap.get('id'));

    });
 this.supplier.GetAllOffersBySupplierIdWithPagination(this.pageNumber,this.pagesize,this.id).subscribe({
  
    next: (data: { data: any; }) => {
      console.log(data);
      this.supplieroffers = data.data
      console.log(this.supplieroffers);
    },
    error: (error: any) => this.errorMessage = error
  
  });
    
  }
  display = '';
  openModal(id:number) {
    this.display = 'block';
    console.log(id);
    this.supplier.GetofferDetails(id).subscribe({
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

}

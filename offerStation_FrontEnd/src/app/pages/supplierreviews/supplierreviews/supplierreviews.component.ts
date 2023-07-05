import { Component,NO_ERRORS_SCHEMA, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SupplierService } from 'src/app/services/supplier/supplier.service';

@Component({
  selector: 'app-supplierreviews',
  templateUrl: './supplierreviews.component.html',
  styleUrls: ['./supplierreviews.component.css']
})
export class SupplierreviewsComponent implements OnInit {
  OwnerReview:any;
  id:any;
  pageNumber:number=1
  totalItems:number=0
  pagesize:number=1
  errorMessage: any;
  constructor(private suppler:SupplierService,private activatedroute:ActivatedRoute)
  {

  } 

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe(paramMap => {
      this.id = Number(paramMap.get('id'));

    });
    this.getAllreviews(this.pageNumber,this.pagesize,this.id)
  }
  getAllreviews(pgNum: number, pageSize: number,id:number)
  {
    this.suppler.GetAllOwnerReviewsbysupplierIDWithPagination(this.pageNumber,this.pagesize,this.id).subscribe({
      next:(data: { data: any; })=>
      {
        console.log(data);
        this.OwnerReview=data.data
        console.log("list"+this.OwnerReview);
      },
      error:(error: any)=>this.errorMessage=error
    })
  }
  pageNumberChanged(value:any)
  {
    this.pageNumber = value
    this.getAllreviews(this.pageNumber,this.pagesize,this.id)
    this.pageNumber = 1
    console.log("page"+value); 
  }
}

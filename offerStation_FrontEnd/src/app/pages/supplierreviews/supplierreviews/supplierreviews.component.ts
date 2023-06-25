import { Component,NO_ERRORS_SCHEMA, OnInit} from '@angular/core';
import { SupplierService } from 'src/app/services/supplier/supplier.service';

@Component({
  selector: 'app-supplierreviews',
  templateUrl: './supplierreviews.component.html',
  styleUrls: ['./supplierreviews.component.css']
})
export class SupplierreviewsComponent implements OnInit {
  OwnerReview:any;
  errorMessage: any;
  constructor(private suppler:SupplierService)
  {

  } 
  ngOnInit(): void {
    // this.suppler.GetAllOwnerReviewsbysupplierID(1).subscribe({
    //   next:(data: { data: any; })=>
    //   {
    //     console.log(data);
    //     this.OwnerReview=data.data
    //     console.log("list"+this.OwnerReview);
    //   },
    //   error:(error: any)=>this.errorMessage=error
    // })
  }
}

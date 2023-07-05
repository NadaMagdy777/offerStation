import { Component,NO_ERRORS_SCHEMA, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwnerService } from 'src/app/services/owner/owner.service';

@Component({
  selector: 'app-ownerreview',
  templateUrl: './ownerreview.component.html',
  styleUrls: ['./ownerreview.component.css'],

})
export class OwnerreviewComponent implements OnInit {

  customerreview:any;
  pageNumber=1;
  pagesize=3;
  totalItems=0;
  errorMessage: any;
  id:any
  constructor(private owner:OwnerService,private activatedroute:ActivatedRoute)
  {

  } 
  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe(paramMap=>
      {
         this.id=Number(paramMap.get('id'));
      
      });
      this.owner.GetAllCustomerReviewsByOwnerIdWithPagination(this.pageNumber,this.pagesize,this.id).subscribe({
        next:data=>
        {
          console.log(data);
          this.customerreview=data.data
          console.log("list"+this.customerreview);
        },
        error:error=>this.errorMessage=error
      })
  
  }
  getAllReviews(pgNum: number, pageSize: number,id:number) 
  {
this.owner.GetAllCustomerReviewsByOwnerIdWithPagination(this.pageNumber,this.pagesize,this.id).subscribe({
  next:data=>
  {
    console.log(data);
    this.customerreview=data.data
    console.log("list"+this.customerreview);
  },
  error:error=>this.errorMessage=error
})
}

  PageNumberChanged(value:number)
  {
    this.pageNumber = value
    this.getAllReviews(this.pageNumber, this.pagesize,this.id)
    this.pageNumber = 1
    console.log(value);
    
  }
}

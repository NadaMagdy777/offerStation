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
  PageNumberChanged(id:number){
    // this.pageNumber = value
    // this.getproduct(this.pageNumber, this.pagesize, this.OwnerCategory, this.selectedcityId, this.sortBy)
    // this.pageNumber = 1
    // console.log(value);
  }
}

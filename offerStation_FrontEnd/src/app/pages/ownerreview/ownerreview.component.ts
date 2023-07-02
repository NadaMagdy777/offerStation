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
    this.owner.GetAllCustomerReviewsByOwnerId(this.id).subscribe({
      next:data=>
      {
        console.log(data);
        this.customerreview=data.data
        console.log("list"+this.customerreview);
      },
      error:error=>this.errorMessage=error
    })
  }
}

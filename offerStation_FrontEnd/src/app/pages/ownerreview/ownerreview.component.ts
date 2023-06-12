import { Component,NO_ERRORS_SCHEMA} from '@angular/core';
import { OwnerService } from 'src/app/services/owner/owner.service';

@Component({
  selector: 'app-ownerreview',
  templateUrl: './ownerreview.component.html',
  styleUrls: ['./ownerreview.component.css'],

})
export class OwnerreviewComponent {

  customerreview:any;
  errorMessage: any;
  constructor(private owner:OwnerService)
  {
this.owner.GetAllCustomerReviewsByOwnerId(1).subscribe({
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

import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerReviewService } from 'src/app/services/customer-review/customer-review.service';
import { OwnerService } from 'src/app/services/owner/owner.service';
import { Review } from 'src/app/sharedClassesAndTypes/Review';

@Component({
  selector: 'app-customer-review',
  templateUrl: './customer-review.component.html',
  styleUrls: ['./customer-review.component.css']
})
export class CustomerReviewComponent {
  review:Review={rating:0,comment:""};
  NewReviewForm:FormGroup;
  ownerId!:number;
  customerId!:number;
  


  constructor(private CustomerReviewService:CustomerReviewService,private router:Router ,private route:ActivatedRoute,
  private fb:FormBuilder) 
  {
    this.NewReviewForm = this.fb.group({

      Rating:['',[Validators.required,Validators.min(1),Validators.max(5)]],
      comment:['',[Validators.required,Validators.minLength(4),Validators.maxLength(200)]],

    })
    this.NewReviewForm.get('Rating')?.valueChanges.subscribe((data) => {
      this.review.rating = data;
    });   
    this.NewReviewForm.get('comment')?.valueChanges.subscribe((data) => {
      this.review.comment= data;
    });
  }
  get Rating()
  {
    return this.NewReviewForm.get('Rating');
  }
  

  get comment()
  {
    return this.NewReviewForm.get('comment');
  }
  ngOnInit(): void {
    
  }
  SaveReview(){
      this.CustomerReviewService.postReview(this.review,this.customerId,this.ownerId).subscribe((res) => {
        if (res.success) {
           console.log("success");
           this.router.navigate(['/account/Appointment/Confirmed'])
        } else {
          console.log(res.message); 
        }
      })
     
  }


}

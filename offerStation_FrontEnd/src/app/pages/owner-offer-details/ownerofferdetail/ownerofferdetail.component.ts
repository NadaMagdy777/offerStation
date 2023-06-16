import { Component, OnInit } from '@angular/core';
import { OwnerService } from 'src/app/services/owner/owner.service';
import { OwnerDetails } from 'src/app/sharedClassesAndTypes/OwnerDetails';

@Component({
  selector: 'app-ownerofferdetail',
  templateUrl: './ownerofferdetail.component.html',
  styleUrls: ['./ownerofferdetail.component.css']
})
export class OwnerofferdetailComponent implements OnInit{
//OwnerOffer:OwnerDetails[]=[];
OwnerOffer:any;
  errorMessage: any;
constructor(private owner:OwnerService) { }
ngOnInit(): void {
  this.owner.GetAllOfferByOwnerId(1).subscribe({
    next: (data: any) => {
      console.log(data);
      this.OwnerOffer = data.data;
    },
    error: (error: any) => this.errorMessage = error,
  })
}
display = 'none';
openModal()
{
  this.display = 'block';
}
closeModal()
{
  this.display = 'none';
}
}

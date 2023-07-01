import { Component, OnInit } from '@angular/core';
import { OwnerService } from 'src/app/services/owner/owner.service';

@Component({
  selector: 'app-ownerdetails',
  templateUrl: './ownerdetails.component.html',
  styleUrls: ['./ownerdetails.component.css']
})
export class OwnerdetailsComponent implements OnInit {
  AddressList:any;
  errorMessage: any;
  constructor(private owner:OwnerService)
  {

  }
  ngOnInit(): void {
    this.owner.GetAddressByOwnerId(1).subscribe({
  
      next: (data: { data: any; }) => {
        console.log(data);
        this.AddressList = data.data
        console.log(this.AddressList);
      },
      error: (error: any) => this.errorMessage = error
    
    });
  }
  
}

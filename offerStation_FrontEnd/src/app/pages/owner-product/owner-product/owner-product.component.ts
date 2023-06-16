import { Component, OnInit } from '@angular/core';
import { OwnerService } from 'src/app/services/owner/owner.service';
import { OwnerDetails } from 'src/app/sharedClassesAndTypes/OwnerDetails';

@Component({
  selector: 'app-owner-product',
  templateUrl: './owner-product.component.html',
  styleUrls: ['./owner-product.component.css']
})
export class OwnerProductComponent implements OnInit{
ownerInfo?:any;
errorMessage: any;
constructor(private owner:OwnerService){}
  ngOnInit(): void {
    this.owner.GetOwnerInfo(1).subscribe({
      next: (data: any) => {
        console.log(data);
        this.ownerInfo = data.data;
      },
      error: (error: any) => this.errorMessage = error,
    })
  }


}

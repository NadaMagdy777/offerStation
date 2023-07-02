import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwnerService } from 'src/app/services/owner/owner.service';
import { OwnerDetails } from 'src/app/sharedClassesAndTypes/OwnerDetails';

@Component({
  selector: 'app-owner-product',
  templateUrl: './owner-product.component.html',
  styleUrls: ['./owner-product.component.css']
})
export class OwnerProductComponent implements OnInit{
ownerInfo?:any;
id:any
errorMessage: any;
constructor(private owner:OwnerService,private activatedroute:ActivatedRoute){}
  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe(paramMap=>
      {
         this.id=Number(paramMap.get('id'));
      
      });
    this.owner.GetOwnerInfo(this.id).subscribe({
      next: (data: any) => {
        console.log(data);
        this.ownerInfo = data.data;
      },
      error: (error: any) => this.errorMessage = error,
    })
  }


}

import { Component, OnInit } from '@angular/core';
import { SupplierService } from 'src/app/services/supplier/supplier.service';

@Component({
  selector: 'app-supplieroffer',
  templateUrl: './supplieroffer.component.html',
  styleUrls: ['./supplieroffer.component.css']
})
export class SupplierofferComponent implements OnInit{
  display = '';
  display1 = '';
  openModal() {
  this.display = 'block';
}
closeModel()
{
  this.display = 'none';
}

PageNumberChanged($event: number) {
throw new Error('Method not implemented.');
}
  supplieroffers:any;
  pageNumber:number=1
  pagesize:number=3
  errorMessage: any;
  constructor(private supplier:SupplierService)
  {

  }
  ngOnInit(): void {
  
 this.supplier.GetAllOffersBySupplierIdWithPagination(this.pageNumber,this.pagesize,1).subscribe({
  
    next: (data: { data: any; }) => {
      console.log(data);
      this.supplieroffers = data.data
      console.log(this.supplieroffers);
    },
    error: (error: any) => this.errorMessage = error
  
  });
    
  }

}

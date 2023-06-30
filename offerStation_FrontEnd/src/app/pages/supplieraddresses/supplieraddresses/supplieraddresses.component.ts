import { Component, OnInit } from '@angular/core';
import { SupplierService } from 'src/app/services/supplier/supplier.service';

@Component({
  selector: 'app-supplieraddresses',
  templateUrl: './supplieraddresses.component.html',
  styleUrls: ['./supplieraddresses.component.css']
})
export class SupplieraddressesComponent  implements OnInit{
  AddressList:any;
  errorMessage: any;
  constructor(private supplier:SupplierService)
  {

  }
  ngOnInit(): void {
    this.supplier.GetAddressBySupplierId(1).subscribe({
  
      next: (data: { data: any; }) => {
        console.log(data);
        this.AddressList = data.data
        console.log(this.AddressList);
      },
      error: (error: any) => this.errorMessage = error
    
    });
  }
}

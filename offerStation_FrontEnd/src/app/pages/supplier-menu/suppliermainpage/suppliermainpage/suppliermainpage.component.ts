import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SupplierService } from 'src/app/services/supplier/supplier.service';

@Component({
  selector: 'app-suppliermainpage',
  templateUrl: './suppliermainpage.component.html',
  styleUrls: ['./suppliermainpage.component.css']
})
export class SuppliermainpageComponent implements OnInit{
  supplierinfo:any;
  id:any;
  errorMessage: any;
  constructor(private supplier:SupplierService,private activatedroute:ActivatedRoute){}
  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe(paramMap => {
      this.id = Number(paramMap.get('id'));

    });
    this.supplier.GetSupplierInfo(this.id).subscribe({
      next: (data: any) => {
        console.log(data);
        this.supplierinfo = data.data;
      },
      error: (error: any) => this.errorMessage = error,
    })
  }

}

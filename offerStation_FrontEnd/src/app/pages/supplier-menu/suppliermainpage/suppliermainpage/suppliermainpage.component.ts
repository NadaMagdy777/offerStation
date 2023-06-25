// import { Component, OnInit } from '@angular/core';
// import { SupplierService } from 'src/app/services/supplier/supplier.service';

// @Component({
//   selector: 'app-suppliermainpage',
//   templateUrl: './suppliermainpage.component.html',
//   styleUrls: ['./suppliermainpage.component.css']
// })
// export class SuppliermainpageComponent implements OnInit{
//   supplierinfo:any;
//   errorMessage: any;
//   constructor(private supplier:SupplierService){}
//   ngOnInit(): void {
//     this.supplier.GetSupplierInfo(1).subscribe({
//       next: (data: any) => {
//         console.log(data);
//         this.supplierinfo = data.data;
//       },
//       error: (error: any) => this.errorMessage = error,
//     })
//   }

// }

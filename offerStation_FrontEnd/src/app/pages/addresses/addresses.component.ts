import { Component, OnInit } from '@angular/core';
import { CustomerprofileService } from 'src/app/services/Customerprofile/customerprofile-service.service';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.css']
})
export class AddressesComponent implements OnInit {
  AddressList: any;
  errorMessage: any;

  constructor(
    private customerServ: CustomerprofileService,
  ) {
  }

  ngOnInit(): void {
    this.customerServ.GetCustomerById(1).subscribe({
      next: (data: any) => {
        // console.log(data);
        let dataJson = JSON.parse(JSON.stringify(data))
        this.AddressList = dataJson.data.addresses;
        console.log(this.AddressList);
      },
      error: (error: any) => this.errorMessage = error,
    });
  }
}

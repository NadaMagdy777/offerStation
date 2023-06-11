import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CustomerprofileService } from 'src/app/services/Customerprofile/customerprofile-service.service';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.css']
})
export class AddressesComponent implements OnInit {

  AddressList: any;
  errorMessage: any;
  address: any;

  CityList: any;
  display = '';

  addressForm = this.fb.group({
    cityID: [''],
    details: [''],
    cityName: ['']
  })

  constructor(
    private customerServ: CustomerprofileService, private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {

  }
  openEmailModal() {
    this.display = 'block';
  }

  onCloseEmailHandled() {
    this.display = 'none';
  }

  //Address Form
  get details() {
    return this.addressForm.get('details');
  }

}

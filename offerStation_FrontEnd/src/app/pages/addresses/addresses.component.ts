import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AddressServiceService } from 'src/app/services/address/address';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { AddressDetails } from 'src/app/sharedClassesAndTypes/AddressDetails';
import { city } from 'src/app/sharedClassesAndTypes/city';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.css']
})
export class AddressesComponent implements OnInit {

  ApplicationuserId: any;

  errorMessage: any;
  display = '';
  display1 = '';

  AddressList: any;
  Address:any;

  cities!: city[]
  city!: city

  addressForm = this.fb.group({
    details: [''],
    cityId: [''],
  })

  constructor(
    private fb: FormBuilder,
    private _addressService: AddressServiceService,
    private _cityService: AddressServiceService,
    private _userDataService: AuthenticationService
  ) { }

  ngOnInit(): void {

    this.ApplicationuserId = this._userDataService.userData;

    this.LoadData();

    this._cityService.GetAllCities().subscribe({
      next: data => {
        console.log(data);
        let dataJson = JSON.parse(JSON.stringify(data))
        this.cities = dataJson.data
        // console.log(this.cities)
      },
      error: (error: any) => this.errorMessage = error,
    });
  }

  LoadData() {
    this._addressService.GetCustomerAdresses(this.ApplicationuserId._value.nameid).subscribe({
      next: data => {
        console.log(data);
        let dataJson = JSON.parse(JSON.stringify(data))
        this.AddressList = dataJson.data;
      },
      error: (error: any) => this.errorMessage = error,
    });
  }

  SubmitData() {

    this._addressService.AddAddress(this.ApplicationuserId._value.nameid, this.addressForm.value).subscribe({
      next: data => {
        this.LoadData()
        this.onCloseAddressHandled();
      },
      error: (error: any) => this.errorMessage = error,
    });
  }

  DeleteAddress(addressId: number, index: number) {

    this._addressService.DeleteAddress(addressId).subscribe({
      next: data => {
        this.AddressList.splice(index, 1);
        this.LoadData();
      },
      error: (error: any) => this.errorMessage = error,
    });
  }

  // UpdateAddress(addressId: number) {
  //   this.display1 = 'block';
  //   this._addressService.UpdateAddress(addressId, this.addressForm.value).subscribe({
  //     next: data => {
  //       // console.log(data);
  //       this.LoadData();
  //     },
  //     error: (error: any) => this.errorMessage = error,
  //   });
  // }

  opeEditAddressModal(addressId: number) {
    this.display1 = 'block';
    this._addressService.GetAdressesDetails(addressId).subscribe({
      next:data =>{
        console.log(data);
        let dataJson = JSON.parse(JSON.stringify(data))
        this.Address = dataJson.data;
      },
      error: (error: any) => this.errorMessage = error,
    });

  }
  openAddressModal() {
    this.display = 'block';
  }

  onCloseAddressHandled() {
    this.display = 'none';
  }

  onCloseEditAddressHandled() {
    this.display1 = 'none';
  }

  //Address Form
  get details() {
    return this.addressForm.get('details');
  }
  get cityId() {
    return this.addressForm.get('cityId');
  }

}

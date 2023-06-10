import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerprofileService } from 'src/app/services/Customerprofile/customerprofile-service.service';
import { AddressServiceService } from 'src/app/services/address/address';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { Customer } from 'src/app/sharedClassesAndTypes/Customer';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})

export class CustomerInfoComponent implements OnInit {

  CustomerInfo: any;
  errorMessage: any;
  isUpdated: boolean = false;

  AddressList: string[] = [];
  CitiesList: string[] = [];
  selectedCity!: string;

  customer: Customer = {
    name: '',
    phoneNumber: '',
    details: '',
    city: '',
    // addresses: [],
    // cityId: 0
  };

  CustomerInfoForm: FormGroup;

  constructor(private fb: FormBuilder,
    private customerServ: CustomerprofileService,
    private _addressService: AddressServiceService,
    private _userAuthServ: AuthenticationService,
  ) {
    this.CustomerInfoForm = this.fb.group({
      name: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      addresses: this.fb.group({
        city: ['', [Validators.required]],
        details: ['', [Validators.required]],
      })
    });

    this.CustomerInfoForm.get('name')?.valueChanges.subscribe((data) => {
      this.customer.name = data;
    });
    this.CustomerInfoForm.get('phoneNumber')?.valueChanges.subscribe((data) => {
      this.customer.phoneNumber = data;
    });
    this.CustomerInfoForm.controls['addresses'].get('city')?.valueChanges.subscribe((data) => {
      this.customer.city = data;
      this.selectedCity = data;
    });
    this.CustomerInfoForm.controls['addresses'].get('details')?.valueChanges.subscribe((data) => {
      this.customer.details = data;
    });
  }

  ngOnInit(): void {
    this.customerServ.GetCustomerById(1).subscribe({
      next: (data: any) => {
        // console.log(data);
        let dataJson = JSON.parse(JSON.stringify(data))
        this.customer = dataJson.data;
        this.AddressList = dataJson.data.addresses;
        console.log(this.AddressList);
        this.LoadFormData();
        // console.log(this.CustomerInfoForm.value)
      },
      error: (error: any) => this.errorMessage = error,
    });

    this._addressService.GetAllCities().subscribe({
      next: (data: any) => {
        this.CitiesList = data;
        // console.log(this.CitiesList)
      },
      error: (error: any) => this.errorMessage = error,
    });

  }

  LoadFormData(): void {
    // this.AddressList = this.customer.addresses;
    this.CustomerInfoForm.patchValue({
      name: this.customer.name,
      phoneNumber: this.customer.phoneNumber,
      addresses: {
        details: this.customer.details,
        city: this.customer.city
      }
    })
  }
  updateCustomerInfo(): void {
    if (window.confirm('Are you sure, you want to update?')) {
      this.customerServ.UpdateCustomerInfo(1, this.customer)
        .subscribe();
    }

    this.isUpdated = !this.isUpdated;
  }

  //Customer Info Form

  get name() {
    return this.CustomerInfoForm.get('name');
  }
  get phoneNumber() {
    return this.CustomerInfoForm.get('phoneNumber');
  }
  get city() {
    return this.CustomerInfoForm.controls['addresses'].get('city');
  }
  get details() {
    return this.CustomerInfoForm.controls['addresses'].get('details');
  }

  // Cancel(): void {
  //   if (window.confirm('Are you sure, you want to cancel, you are about to lose the new data?')) {
  //     this.LoadFormData();
  //   }
  // }
}

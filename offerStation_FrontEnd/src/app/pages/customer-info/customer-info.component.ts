import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerprofileService } from 'src/app/services/Customerprofile/customerprofile-service.service';
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

  customer: Customer = {
    name: '',
    phoneNumber: '',
    email: ''
  };

  CustomerInfoForm: any = this.fb.group({
    name: ['', [Validators.required]],
    phoneNumber: ['', [Validators.required]],
    email: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder, private customerServ: CustomerprofileService) { }

  ngOnInit(): void {

    this.customerServ.GetCustomerById(1).subscribe({
      next: (data: any) => {
        // console.log(data);
        let dataJson = JSON.parse(JSON.stringify(data))
        this.customer = dataJson.data;
        this.CustomerInfoForm.patchValue({
          name: this.customer.name,
          phoneNumber: this.customer.phoneNumber,
          email: this.customer.email
        })
        // console.log(this.CustomerInfoForm.value)
      },
      error: (error: any) => this.errorMessage = error,
    });

  }

  SubmitData() {
    console.log(this.CustomerInfoForm.value);

    if (window.confirm('Are you sure, you want to update?')) {
      this.customerServ.UpdateCustomerInfo(1, this.CustomerInfoForm.value).subscribe({
        next: (data: any) => {
          console.log(data);
          this.CustomerInfo = data;
        },
        error: (error: any) => this.errorMessage = error,
      });
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
  get email() {
    return this.CustomerInfoForm.get('email');
  }

}

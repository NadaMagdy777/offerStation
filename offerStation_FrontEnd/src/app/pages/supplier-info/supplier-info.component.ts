import { Component, OnInit } from '@angular/core';
import { SupplierInfo } from 'src/app/sharedClassesAndTypes/SupplierInfo';
import { FormBuilder, Validators } from '@angular/forms';
import { SupplierprofileService } from 'src/app/services/SupplierProfile/supplierprofile.service';

@Component({
  selector: 'app-supplier-info',
  templateUrl: './supplier-info.component.html',
  styleUrls: ['./supplier-info.component.css']
})
export class SupplierInfoComponent implements OnInit {

  SupplierInfo: any;
  errorMessage: any;
  isUpdated: boolean = false;

  supplier: SupplierInfo = {
    name: '',
    email: '',
    image: '',
    phoneNumber: ''
  }

  SupplierInfoForm: any = this.fb.group({
    image: [''],
    name: ['', [Validators.required]],
    phoneNumber: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]]
  });

  constructor(private fb: FormBuilder, private _supplierServ: SupplierprofileService) { }

  ngOnInit(): void {
    this._supplierServ.GetSupplierById(1).subscribe({
      next: (data: any) => {
        // console.log(data);
        let dataJson = JSON.parse(JSON.stringify(data))
        this.supplier = dataJson.data;
        this.SupplierInfoForm.patchValue({
          image: this.supplier.image,
          name: this.supplier.name,
          email: this.supplier.email,
          phoneNumber: this.supplier.phoneNumber
        })
        // console.log(this.SupplierInfoForm.value)
      },
      error: (error: any) => this.errorMessage = error,
    });
  }

  SubmitData() {
    console.log(this.SupplierInfoForm.value);

    if (window.confirm('Are you sure, you want to update?')) {
      this._supplierServ.UpdateSupplierInfo(1, this.SupplierInfoForm.value).subscribe({
        next: (data: any) => {
          console.log(data);
          this.SupplierInfo = data;
        },
        error: (error: any) => this.errorMessage = error,
      });
    }
    this.isUpdated = !this.isUpdated;
  }

  //Supplier Info Form

  get image() {
    return this.SupplierInfoForm.get('image');
  }
  get name() {
    return this.SupplierInfoForm.get('name');
  }
  get email() {
    return this.SupplierInfoForm.get('email');
  }
  get phoneNumber() {
    return this.SupplierInfoForm.get('phoneNumber');
  }

}

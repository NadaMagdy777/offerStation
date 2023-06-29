import { Component, OnInit } from '@angular/core';
import { SupplierInfo } from 'src/app/sharedClassesAndTypes/SupplierInfo';
import { FormBuilder, Validators } from '@angular/forms';
import { SupplierprofileService } from 'src/app/services/SupplierProfile/supplierprofile.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-supplier-info',
  templateUrl: './supplier-info.component.html',
  styleUrls: ['./supplier-info.component.css']
})
export class SupplierInfoComponent implements OnInit {

  SupplierInfo: any;
  errorMessage: any;
  isUpdated: boolean = false;
  imageUrl: string = '';

  supplier: SupplierInfo = {
    name: '',
    email: '',
    image: '',
    phoneNumber: ''
  }

  SupplierInfoForm: any = this.fb.group({
    image: [[]],
    name: ['', [Validators.required]],
    phoneNumber: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]]
  });

  constructor(private fb: FormBuilder,
    private _supplierServ: SupplierprofileService,
    private _imageService: ImageService) { }

  ngOnInit(): void {
    this._supplierServ.GetSupplierById(1).subscribe({
      next: (data: any) => {
        // console.log(data);
        let dataJson = JSON.parse(JSON.stringify(data))
        this.supplier = dataJson.data;
        this.imageUrl = this._imageService.base64ArrayToImage(this.supplier.image);
        this.SupplierInfoForm.patchValue({
          image: this.imageUrl,
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

  public async ProcessFile(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async (e: any) => {
        this.imageUrl = e.target.result;
        this.supplier.image = await this._imageService.imageToBase64Array(this.imageUrl);
      };
      reader.readAsDataURL(file);
    }
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

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { OwnerprofileService } from 'src/app/services/OwnerProfile/ownerprofile.service';
import { ImageService } from 'src/app/services/image.service';
import { OwnerInfo } from 'src/app/sharedClassesAndTypes/OwnerInfo';

@Component({
  selector: 'app-owner-info',
  templateUrl: './owner-info.component.html',
  styleUrls: ['./owner-info.component.css']
})
export class OwnerInfoComponent implements OnInit {

  OwnerInfo: any;
  errorMessage: any;
  isUpdated: boolean = false;
  imageUrl = '';

  owner: OwnerInfo = {
    name: '',
    email: '',
    image: '',
    phoneNumber: ''
  };

  OwnerInfoForm: any = this.fb.group({
    image: [[]],
    name: ['', [Validators.required]],
    phoneNumber: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]]
  });

  constructor(private fb: FormBuilder,
    private _ownerrServ: OwnerprofileService,
    private _imageService: ImageService) { }

  ngOnInit(): void {
    this._ownerrServ.GetOwnerInfo(1).subscribe({
      next: (data: any) => {
        // console.log(data);
        let dataJson = JSON.parse(JSON.stringify(data))
        this.owner = dataJson.data;
        this.imageUrl = this._imageService.base64ArrayToImage(this.owner.image);
        this.OwnerInfoForm.patchValue({
          image: this.imageUrl,
          name: this.owner.name,
          email: this.owner.email,
          phoneNumber: this.owner.phoneNumber
        })
        // console.log(this.OwnerInfoForm.value)
      },
      error: (error: any) => this.errorMessage = error,
    });
  }

  SubmitData() {
    console.log(this.OwnerInfoForm.value);

    if (window.confirm('Are you sure, you want to update?')) {
      this._ownerrServ.UpdateOwnerInfo(1, this.owner).subscribe({
        next: (data: any) => {
          this.OwnerInfo = data;
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
        this.owner.image = await this._imageService.imageToBase64Array(this.imageUrl);
      };
      reader.readAsDataURL(file);
    }
  }

  delete() {
    this.imageUrl = '';
  }
  //Owner Info Form

  get image() {
    return this.OwnerInfoForm.get('image');
  }
  get name() {
    return this.OwnerInfoForm.get('name');
  }
  get email() {
    return this.OwnerInfoForm.get('email');
  }
  get phoneNumber() {
    return this.OwnerInfoForm.get('phoneNumber');
  }
}

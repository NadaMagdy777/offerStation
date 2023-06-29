import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ImageService } from 'src/app/services/image.service';
import { OwnerService } from 'src/app/services/owner/owner.service';
import { OwnerOfferInfo } from 'src/app/sharedClassesAndTypes/OwnerOfferInfo';

@Component({
  selector: 'app-owner-offers',
  templateUrl: './owner-offers.component.html',
  styleUrls: ['./owner-offers.component.css']
})

export class OwnerOffersComponent implements OnInit {

  errorMessage: any;
  OfferList: any
  index!: any;
  imageUrl: string = '';

  display = '';
  display1 = '';

  ownerOffer: OwnerOfferInfo = {
    ownerId: 0,
    createdTime: '',
    id: 0,
    prefPrice: 0,
    traderImage: '',
    name: '',
    description: '',
    price: 0,
    image: ''
  }
  OfferForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _ownerService: OwnerService
    , private _imageService: ImageService) {

    this.OfferForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required]],
      image: [[]],
    });

    this.OfferForm.get('name')?.valueChanges.subscribe((data) => {
      this.ownerOffer.name = data;
    });
    this.OfferForm.get('description')?.valueChanges.subscribe((data) => {
      this.ownerOffer.description = data;
    });
    this.OfferForm.get('price')?.valueChanges.subscribe((data) => {
      this.ownerOffer.price = data;
    });
    this.OfferForm.get('image')?.valueChanges.subscribe((data) => {
      this.ownerOffer.image = data;
    });

  }

  ngOnInit(): void {
    this.LoadData()
  }

  LoadData() {
    this._ownerService.GetOffersByOwnerId(1).subscribe({
      next: data => {
        console.log(data);
        let dataJson = JSON.parse(JSON.stringify(data))
        this.OfferList = dataJson.data;
        // console.log(this.OfferList);

      },
      error: error => this.errorMessage = error
    });
  }

  OnImageLoad(image: any) {
    this.imageUrl = this._imageService.base64ArrayToImage(image);
  }

  SubmitData() {  //Error when choosing image from the system

    this._ownerService.AddOffer(1, this.OfferForm.value).subscribe({
      next: data => {
        console.log(data);
        this.LoadData()
        this.onCloseOfferHandled();
      },
      error: (error: any) => this.errorMessage = error,
    });
  }

  DeleteOffer(offerId: number, index: number) {

    this._ownerService.DeleteOffer(offerId).subscribe({
      next: data => {
        this.OfferList.splice(index, 1);
        this.LoadData();
      },
      error: (error: any) => this.errorMessage = error,
    });
  }

  UpdateOffer() {
    this._ownerService.UpdateOffer(this.ownerOffer.id, this.OfferForm.value).subscribe({
      next: data => {
        this.OfferList[this.index] = this.OfferForm.value;
        this.onCloseEditOfferHandled();
      },
      error: (error: any) => this.errorMessage = error,
    });
  }

  public async ProcessFile(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async (e: any) => {
        this.imageUrl = e.target.result;
        this.ownerOffer.image = await this._imageService.imageToBase64Array(this.imageUrl);
      };
      reader.readAsDataURL(file);
    }
  }

  openEditOfferModal(offer: any, i: any) {
    this.display1 = 'block';
    this.index = i;
    console.log(offer)
    this.ownerOffer.id = offer.id
    this.OfferForm.patchValue(
      {
        name: offer.name,
        description: offer.description,
        price: offer.price,
        image: offer.image
      }
    )
  }

  openOfferModal() {
    this.display = 'block';
  }

  onCloseOfferHandled() {
    this.display = 'none';
  }

  onCloseEditOfferHandled() {
    this.display1 = 'none';
  }

  //Offer Form
  get name() {
    return this.OfferForm.get('name');
  }
  get description() {
    return this.OfferForm.get('description');
  }
  get price() {
    return this.OfferForm.get('price');
  }
  get image() {
    return this.OfferForm.get('image');
  }

}

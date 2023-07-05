import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ImageService } from 'src/app/services/image.service';
import { OwnerService } from 'src/app/services/owner/owner.service';
import { Offer } from 'src/app/sharedClassesAndTypes/OwnerOfferInfo';

@Component({
  selector: 'app-owner-offers',
  templateUrl: './owner-offers.component.html',
  styleUrls: ['./owner-offers.component.css']
})

export class OwnerOffersComponent implements OnInit {

  OfferList: any;
  ProductList: any;

  index!: any;
  imageUrl: string = '';
  errorMessage: any;

  display = '';
  display1 = '';

  ownerOffer: Offer = {
    ownerId: 0,
    createdTime: '',
    id: 0,
    prefPrice: 0,
    traderImage: '',
    name: '',
    description: '',
    price: 0,
    image: '',
    products: []
  }

  constructor(
    private fb: FormBuilder,
    private _ownerService: OwnerService
    , private _imageService: ImageService) { }

  OfferForm = this.fb.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
    price: ['', [Validators.required]],
    image: [''],
    products: this.fb.array([]),
  });

  ngOnInit(): void {

    this.LoadData()

    this._ownerService.getAllProductsByOwnerId(1).subscribe({
      next: data => {

        console.log(data);
        let dataJson = JSON.parse(JSON.stringify(data))
        this.ProductList = dataJson.data;

      },
      error: error => this.errorMessage = error
    });
  }

  LoadData() {
    this._ownerService.GetOffersByOwnerId(1).subscribe({
      next: data => {

        console.log(data);
        let dataJson = JSON.parse(JSON.stringify(data))
        this.OfferList = dataJson.data;

      },
      error: error => this.errorMessage = error
    });
  }

  OnImageLoad(image: any) {
    this.imageUrl = this._imageService.base64ArrayToImage(image);
  }

  SubmitData() {

    this._ownerService.AddOffer(1, this.OfferForm.value).subscribe({
      next: data => {
        console.log(data);
        this.LoadData()
        this.onCloseOfferHandled();
        this.OfferForm.reset();
      },
      error: (error: any) => this.errorMessage = error,
    });
  }

  AddProduct() {
    this.products.push(this.CreateProduct());
  }

  CreateProduct() {
    return this.fb.group({
      quantity: ['', [Validators.required]],
      productId: ['', [Validators.required]],
    });
  }

  DeleteProduct(index: any) {
    this.products.removeAt(index);
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

  openOfferModal() {
    this.display = 'block';
    this.OfferForm.reset();
  }

  onCloseOfferHandled() {
    this.display = 'none';
    this.OfferForm.reset();
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
  get products() {
    return this.OfferForm.get('products') as FormArray;
  }
  get productsControls() {
    return (this.OfferForm.get('products') as FormArray).controls as FormGroup[];
  }

}

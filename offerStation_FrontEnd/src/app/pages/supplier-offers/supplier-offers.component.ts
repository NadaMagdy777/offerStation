import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ImageService } from 'src/app/services/image.service';
import { SupplierService } from 'src/app/services/supplier/supplier.service';
import { Offer } from 'src/app/sharedClassesAndTypes/OwnerOfferInfo';

@Component({
  selector: 'app-supplier-offers',
  templateUrl: './supplier-offers.component.html',
  styleUrls: ['./supplier-offers.component.css']
})

export class SupplierOffersComponent implements OnInit {

  OfferList: any;
  ProductList: any;

  index!: any;
  imageUrl: string = '';
  errorMessage: any;

  display = '';
  display1 = '';

  supplierOffer: Offer = {
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

  OfferForm = this.fb.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
    price: ['', [Validators.required]],
    image: [''],
    products: this.fb.array([]),
  });

  constructor(private fb: FormBuilder,
    private _supplierService: SupplierService
    , private _imageService: ImageService) {
  }
  ngOnInit(): void {
    this.LoadData()

    this._supplierService.GetAllProductsBySupplierId(1).subscribe({
      next: data => {

        console.log(data);
        let dataJson = JSON.parse(JSON.stringify(data))
        this.ProductList = dataJson.data;

      },
      error: error => this.errorMessage = error
    });
  }

  LoadData() {
    this._supplierService.GetOffersBySupplierId(1).subscribe({
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

    this._supplierService.AddOffer(1, this.OfferForm.value).subscribe({
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

    this._supplierService.DeleteOffer(offerId).subscribe({
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
        this.supplierOffer.image = await this._imageService.imageToBase64Array(this.imageUrl);
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

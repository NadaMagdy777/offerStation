import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OwnerService } from 'src/app/services/owner/owner.service';
import { OwnerProduct } from 'src/app/sharedClassesAndTypes/OwnerProduct';
import { ownerCategory } from 'src/app/sharedClassesAndTypes/ownerCategory';

@Component({
  selector: 'app-owner-products',
  templateUrl: './owner-products.component.html',
  styleUrls: ['./owner-products.component.css']
})
export class OwnerProductsComponent implements OnInit {

  errorMessage: any;
  ProductList: any

  display = '';
  display1 = '';

  ownerProduct: OwnerProduct = {
    id: 0,
    name: '',
    description: '',
    price: undefined,
    image: '',
    categoryId: 0,
    discount: 0,
    discountPrice: undefined
  }

  categories!: ownerCategory[]
  category!: ownerCategory

  productForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _ownerService: OwnerService) {

    this.productForm = this.fb.group({
      name: [''],
      description: [''],
      price: [''],
      discount: [''],
      image: [''],
      categoryId: [''],
    });

    this.productForm.get('name')?.valueChanges.subscribe((data) => {
      this.ownerProduct.name = data;
    });
    this.productForm.get('description')?.valueChanges.subscribe((data) => {
      this.ownerProduct.description = data;
    });
    this.productForm.get('price')?.valueChanges.subscribe((data) => {
      this.ownerProduct.price = data;
    });
    this.productForm.get('discount')?.valueChanges.subscribe((data) => {
      this.ownerProduct.discount = data;
    });
    this.productForm.get('image')?.valueChanges.subscribe((data) => {
      this.ownerProduct.image = data;
    });
    this.productForm.get('categoryId')?.valueChanges.subscribe((data) => {
      this.ownerProduct.categoryId = data;
    });


  }
  ngOnInit(): void {

    this.LoadData();

    this._ownerService.getMenuCategorybyOwnerId(1).subscribe({
      next: data => {
        // console.log(data);
        let dataJson = JSON.parse(JSON.stringify(data))
        this.categories = dataJson.data
        console.log(this.categories)
      },
      error: (error: any) => this.errorMessage = error,
    });
  }

  LoadData() {
    this._ownerService.getAllProductsByOwnerId(1).subscribe({
      next: data => {
        // console.log(data);
        let dataJson = JSON.parse(JSON.stringify(data))
        this.ProductList = dataJson.data;
        // console.log(this.ProductList);
      },
      error: error => this.errorMessage = error
    });
  }

  SubmitData() {  //Error when choosing image from the system

    // console.log(this.productForm.value);

    this._ownerService.AddProduct(1, this.productForm.value).subscribe({
      next: data => {
        // console.log(data);
        this.LoadData()
        this.onCloseProductHandled();
      },
      error: (error: any) => this.errorMessage = error,
    });
  }

  DeleteProduct(productId: number, index: number) {

    this._ownerService.DeleteProduct(productId).subscribe({
      next: data => {
        this.ProductList.splice(index, 1);
        this.LoadData();
      },
      error: (error: any) => this.errorMessage = error,
    });
  }

  UpdateProduct() {
    // console.log(this.productForm.value);
    this._ownerService.UpdateProduct(this.ownerProduct.id, this.ownerProduct).subscribe({
      next: data => {
        // console.log(data);
        this.LoadData();
        this.onCloseEditProductHandled();
        // console.log(this.productForm.value);
      },
      error: (error: any) => this.errorMessage = error,
    });
  }

  opeEditProductModal(productId: number) {
    this.display1 = 'block';
    this._ownerService.GetProductDetails(productId).subscribe({
      next: data => {
        // console.log(data);
        let dataJson = JSON.parse(JSON.stringify(data))
        this.ownerProduct = dataJson.data;
        // console.log(this.ownerProduct)
      },
      error: (error: any) => this.errorMessage = error,
    });

  }

  openProductModal() {
    this.display = 'block';
  }

  onCloseProductHandled() {
    this.display = 'none';
  }

  onCloseEditProductHandled() {
    this.display1 = 'none';
  }

  //Product Form
  get name() {
    return this.productForm.get('name');
  }
  get description() {
    return this.productForm.get('description');
  }
  get price() {
    return this.productForm.get('price');
  }
  get discount() {
    return this.productForm.get('discount');
  }
  get image() {
    return this.productForm.get('image');
  }
  get categoryId() {
    return this.productForm.get('categoryId');
  }

}

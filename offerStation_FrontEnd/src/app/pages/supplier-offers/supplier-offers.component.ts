import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Offer } from 'src/app/sharedClassesAndTypes/OwnerOfferInfo';

@Component({
  selector: 'app-supplier-offers',
  templateUrl: './supplier-offers.component.html',
  styleUrls: ['./supplier-offers.component.css']
})

export class SupplierOffersComponent implements OnInit {

  offerForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.offerForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      image: [''],
      products: this.fb.array([]) // Initialize an empty FormArray for products
    });
  }
  ngOnInit(): void {

  }


  // get products(): FormArray {
  //   return this.offerForm.get('products') as FormArray;
  // }

  addProduct(): void {
    // const productFormGroup = this.fb.group({
    //   quantity: ['', Validators.required],
    //   productId: ['', Validators.required]
    // });

    // this.products.push(productFormGroup);
  }

  removeProduct(index: number): void {
    // this.products.removeAt(index);
  }

  submitForm() {

  }
}

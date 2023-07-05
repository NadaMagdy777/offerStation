import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  offerForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.offerForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      image: [''],
      products: this.fb.array([]) 
    });
  }
  ngOnInit(): void {

  }

}

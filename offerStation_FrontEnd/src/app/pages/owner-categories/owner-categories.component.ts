import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OwnerService } from 'src/app/services/owner/owner.service';
import { ownerCategory } from 'src/app/sharedClassesAndTypes/ownerCategory';

@Component({
  selector: 'app-owner-categories',
  templateUrl: './owner-categories.component.html',
  styleUrls: ['./owner-categories.component.css']
})

export class OwnerCategoriesComponent implements OnInit {

  errorMessage: any;
  display = '';
  display1 = '';

  ownerCategory: ownerCategory = {
    id: 0,
    menuName: '',
    // image: ''
  }
  categories!: ownerCategory[]
  CategoryForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _ownerService: OwnerService) {

    this.CategoryForm = this.fb.group({
      menuName: [''],
      // image: [''],
    });
    this.CategoryForm.get('menuName')?.valueChanges.subscribe((data) => {
      this.ownerCategory.menuName = data;
    });
    // this.CategoryForm.get('image')?.valueChanges.subscribe((data) => {
    //   this.ownerCategory.image = data;
    // });
  }

  ngOnInit(): void {
    this.LoadData();

  }

  LoadData() {
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

}

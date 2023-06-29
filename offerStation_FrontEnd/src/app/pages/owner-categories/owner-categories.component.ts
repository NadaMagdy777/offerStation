import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ImageService } from 'src/app/services/image.service';
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
  imageUrl: string = '';

  ownerCategory: ownerCategory = {
    id: 0,
    image: '',
    name: '',
  }
  categories!: ownerCategory[];
  CategoryForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _ownerService: OwnerService
    , private _imageService: ImageService) {

    this.CategoryForm = this.fb.group({
      name: ['', [Validators.required]],
      image: [[]],
    });
    this.CategoryForm.get('name')?.valueChanges.subscribe((data) => {
      this.ownerCategory.name = data;
    });
    this.CategoryForm.get('image')?.valueChanges.subscribe((data) => {
      this.ownerCategory.image = data;
    });
  }

  ngOnInit(): void {

    this.LoadData();

  }

  LoadData() {
    this._ownerService.getMenuCategorybyOwnerId(1).subscribe({
      next: data => {

        let dataJson = JSON.parse(JSON.stringify(data))
        this.categories = dataJson.data;

      },
      error: (error: any) => this.errorMessage = error,
    });
  }

  OnImageLoad(image: any) {
    this.imageUrl = this._imageService.base64ArrayToImage(image);
  }

  SubmitData() {  //Error when choosing image from the system

    this._ownerService.AddCategory(1, this.ownerCategory).subscribe({
      next: data => {
        console.log(data);
        this.LoadData()
        this.onCloseCategoryHandled();
      },
      error: (error: any) => this.errorMessage = error,
    });
  }

  DeleteCategory(categoryId: number, index: number) {
    console.log(categoryId);
    this._ownerService.DeleteCategory(categoryId).subscribe({
      next: data => {
        this.categories.splice(index, 1);
        // console.log(this.categories)
        this.LoadData();
      },
      error: (error: any) => this.errorMessage = error,
    });
  }

  UpdateCategory() {

    this._ownerService.UpdateCategory(this.ownerCategory.id, this.ownerCategory).subscribe({
      next: data => {
        this.LoadData();
        this.onCloseEditCategoryHandled();
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
        this.ownerCategory.image = await this._imageService.imageToBase64Array(this.imageUrl);
      };
      reader.readAsDataURL(file);
    }
  }

  openEditCategoryModal(categoryId: number) {
    this.display1 = 'block';
    this._ownerService.GetCategoryDetails(categoryId).subscribe({
      next: data => {
        let dataJson = JSON.parse(JSON.stringify(data))
        this.ownerCategory = dataJson.data;
      },
      error: (error: any) => this.errorMessage = error,
    });

  }

  openCategoryModal() {
    this.display = 'block';
  }

  onCloseCategoryHandled() {
    this.display = 'none';
  }

  onCloseEditCategoryHandled() {
    this.display1 = 'none';
  }

  //Category Form
  get name() {
    return this.CategoryForm.get('name');
  }
  get image() {
    return this.CategoryForm.get('image');
  }
}

import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AdminCategoriesService } from 'src/app/services/admin/admin-owner-categories.service';
import { ImageService } from 'src/app/services/image.service';
import { Category } from 'src/app/sharedClassesAndTypes/Category';

@Component({
  selector: 'app-admin-owner-category',
  templateUrl: './admin-owner-category.component.html',
  styleUrls: ['./admin-owner-category.component.css']
})
export class AdminOwnerCategoryComponent {

  categories: Category[] = [];
  dataSource!: MatTableDataSource<Category>;
  pageNumber = 1;
  pageSize = 5;
  imageUrl: string = '';

  newCategory: Category = {
    id: 0,
    name: '',
    image: []
  };
  tableColumns  :  string[] = ['divisionId','divisionName','divisionImage','actions'];
  filterValue: string = '';

  display: string = 'none';
  categoryForm:FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(
    private _categoryService: AdminCategoriesService,
    private _imageService:ImageService,
    private fb:FormBuilder,
    ) 
    {
      this.categoryForm = this.fb.group({
        name:['',[Validators.required]],
        profilePicture:[[],[Validators.required]]
      });

      this.categoryForm.get('name')?.valueChanges.subscribe((data) => {
        //this.categoryForm.name = data;
      });
      this.categoryForm.get('profilePicture')?.valueChanges.subscribe((data) => {
        //this.categoryForm.profilePicture = data;
      });
    }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this._categoryService.GetAllCategories(this.pageNumber, this.pageSize)
      .subscribe(response => 
        {
          console.log("response: ",response);
          
          this.categories = response.data
          console.log("categories: ",this.categories);
          this.dataSource = new MatTableDataSource(this.categories);
          console.log("DataSource: ",this.dataSource);  
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;   
        });
  }

  public async ProcessFile(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async (e: any) => {
        this.imageUrl = e.target.result;
        // this..image = await this._imageService.imageToBase64Array(this.imageUrl);
      };
      reader.readAsDataURL(file);
    }
  }
  applyFilter() {
    this.dataSource.filter = this.filterValue.trim().toLowerCase();
  }
  onPageChange(event: PageEvent) {
    this.pageSize = event.pageSize;
  }
  onDelete(categoryId:number){

  }
  onUpdate(category:Category){

  }
  openModal(){
    this.display = 'block';
  }
  openEditProductModal(productId: number) {

  }
  onCloseProductHandled() {
    this.display = 'none';
  }
  OnSubmit(){

  }
  OnCancel(){}
}

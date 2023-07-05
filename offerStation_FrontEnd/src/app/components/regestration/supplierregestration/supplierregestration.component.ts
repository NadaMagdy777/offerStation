import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/Category/category.service';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { CityService } from 'src/app/services/city/city.service';
import { ConfirmPasswordValidator } from 'src/app/validators/confirmPassword.validation';

@Component({
  selector: 'app-supplierregestration',
  templateUrl: './supplierregestration.component.html',
  styleUrls: ['./supplierregestration.component.css']
})
export class SupplierregestrationComponent {
  constructor(private _AuthService: AuthenticationService,
    private fb: FormBuilder,
    private cityService: CityService,
  private category:CategoryService,
  private router: Router
  ) {

  }

msg='';
  Cities: any;
  categories: any;
  error: string = ''
  registerForm = this.fb.group({
    name: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    address: this.fb.array([]),
    Password: ['', [Validators.required]],
    supplierCategoryId:['',[Validators.required]],
    Confirm: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
  }, { validator: [ConfirmPasswordValidator] })

  get Name() {
    return this.registerForm.get('name');
  }
  
  get Phone() {
    return this.registerForm.get('phone');
  }
  get Address() {
    return this.registerForm.get('address') as FormArray;
  }
  get AddressControls() {
    return (this.registerForm.get('address') as FormArray).controls as FormGroup[];
  }
  get Password() {
    return this.registerForm.get('Password');
  }
  get Confirm() {
    return this.registerForm.get('confirm');
  }
  get Email() {
    return this.registerForm.get('email');
  }


  ngOnInit() {
    this.cityService.GetAllCities().subscribe({
      next: data => this.Cities = data.data,
      error: error => console.log(error)
    });
    this.category.GetAllSupplierCategory().subscribe({
      next: data => this.categories = data.data,
      error: error => console.log(error)
    });

  }

  addAddress() {
    this.Address.push(this.createMaterial());
  }
  createMaterial() {
    return this.fb.group({
      details: ['', [Validators.required]],
      cityId: ['', [Validators.required]],
    });
  }
  deleteAddress(index: any) {
    this.Address.removeAt(index);
  }

  submitData() {
    console.log(this.registerForm.value);
    
    this._AuthService.registerSupplier(this.registerForm.value).subscribe({
      next:data=>{   
         console.log(data) 
        if(data.success)
        {
                    
          console.log("next");
          this.router.navigate(['login']);
        }
          
        else
          this.error = data.data;
      },
      error: error => console.log(error)
    })
  }


  removemesage(){
    this.msg="";
  }
}

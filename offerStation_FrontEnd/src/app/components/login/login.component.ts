import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private fb: FormBuilder, private _AuthenticationService: AuthenticationService, private router: Router) {

  }

  loginForm = this.fb.group({
    password: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
  })

  get password() {
    return this.loginForm.get('password');
  }
  get email() {
    return this.loginForm.get('email');
  }
  error: string = ''

  submitData() {    
    
    this._AuthenticationService.login(this.loginForm.value).subscribe({
      next:data=>{        
        if (data.success == true) {
          
          localStorage.setItem("userToken",data.data.token);
          this._AuthenticationService.saveUserData()
          // this.router.navigate(['home'])
        }
        else {
          // this.error=
        }
      },
      error:error=>console.log(error)
    });
  }
}

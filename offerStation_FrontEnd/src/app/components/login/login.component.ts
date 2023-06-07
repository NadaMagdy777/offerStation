import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private fb:FormBuilder) {
    
  }

  loginForm=this.fb.group({
    password:['',[Validators.required]],
    email:['',[Validators.required,Validators.email]],
  })

  get password(){
    return this.loginForm.get('password');
  }
  get email(){
    return this.loginForm.get('email');
  }
  error:string=''
  submitLoginForm(loginForm:FormGroup)
{
     if(loginForm.valid){
      // this._AuthService.register(loginForm.value).subscribe((response)=>{
  
      //   if(response.message=='success')
      //   {
      //     localStorage.setItem('userToken',response.userToken)
      //     this._AuthService.saveUserData()
      //        this.router.navigate(['home'] )
      //   }
      //   else{
      //     // this.error=
      //   }

      // })

     }
}
// userModel=new User("","","","",false);
submitData()
{
  //component ===> service
  //service==>http call
  // this._AuthService.loginform(this.userModel).subscribe({
  //   next:data=>console.log(data),
  //   error:error=>console.log(error)
  // });
}


}

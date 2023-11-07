import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, UntypedFormGroup, Validators } from '@angular/forms';
import { AuthService } from '@module/auth/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup = new FormGroup({});

  constructor(private asAuthService: AuthService){

  }


  ngOnInit(): void {
    this.formLogin =  new FormGroup(
      {
        email:  new FormControl('',[Validators.required, Validators.email]),
        password:new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(8)]),
      }
    )
  }


  sendLogin(){
    const {email, password}= this.formLogin.value
    console.log(this.formLogin.value);

    this.asAuthService.sendCredentials(email,password);
    

  }
}

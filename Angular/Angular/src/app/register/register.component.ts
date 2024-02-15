import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

signupForm:FormGroup|any;

usernameregex="^[a-zA-Z]+$";
passwordregex="^([a-zA-Z0-9@*#]{8,15})$";
emailregex="[a-z0-9]+@[a-z]+\.[a-z]{2,3}";
mobnoregex="^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$";

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.signupForm=this.fb.group({
      username:["",[Validators.required,Validators.pattern("^[a-zA-Z]+$")]],
      password:["",[Validators.required,Validators.pattern("^([a-zA-Z0-9@*#]{8,15})$")]],
      confirmpassword:["",[Validators.required]],
      userRole:["",[Validators.required]],
      email:["",[Validators.required,Validators.pattern("[a-z0-9]+@[a-z]+\.[a-z]{2,3}")]],
      mobileNumber:["",[Validators.required,Validators.pattern("^(0|91)?[6-9][0-9]{9}$")]],

    })
  }

}

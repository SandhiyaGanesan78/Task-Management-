import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup | any;

  constructor(private router: Router,private fb:FormBuilder) { }
  public userName: string = '';
  public password: string = '';
  public showSpinner: boolean = false;

  ngOnInit(): void {
    {
      this.loginForm=this.fb.group({
        username:["",Validators.required],
        password:["",Validators.required]
      })
    }
  }

  login() {
    this.router.navigate(['app']);
  }
}

import { Component, OnInit } from '@angular/core';

//services
import { Router } from '@angular/router';
import {AuthApiService } from '../../services/auth-api.service';

//interface
import { LoginInfo } from '../../interfaces/login-info';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUser: LoginInfo = {
    loginUsername: '',
    loginPassword: ''
  }

  errorMessage: string;
  loginError: string;

  constructor(
    private authThang: AuthApiService,
    private routerThang: Router
  ) { }

  ngOnInit() {
  }

  loginSubmit() {
    this.authThang.postLogin(this.loginUser)
      .subscribe(
        (userInfo) => {
          this.routerThang.navigate(['']);
        },
        (errInfo) => {
          console.log('Log in error', errInfo);
          if (errInfo.status === 401) {
            this.loginError = 'Bad Credentials';
          } else {
            this.loginError = "Something went wrong. Try again later."
          }
        }
      );
  }

}

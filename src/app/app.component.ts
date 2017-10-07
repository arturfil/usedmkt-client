import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthApiService } from './services/auth-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  userInfo: any;

  constructor(
    private routerThang: Router,
    private authThang: AuthApiService
  ) { }

  ngOnInit() {
    this.authThang.getLoginStatus();
    this.authThang.loginStatusNotifier
      .subscribe(
        (loggedInInfo: any) => {
          if (loggedInInfo.isLoggedIn) {
            this.userInfo = loggedInInfo.userInfo;
          } else {
            this.userInfo = null;
          }
        }

      );
  }

  logMeOut() {
    this.authThang.logOut()
      .subscribe(
        (apiResponse) => {
          this.routerThang.navigate(['/login'])
        }
      );
  }

}

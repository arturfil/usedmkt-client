import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthApiService } from '../../services/auth-api.service';
import { UserInfoService } from '../../services/user-info.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userInfo: any;

  constructor(
    private authThang: AuthApiService,
    private routerThang: Router,
    private userThang: UserInfoService
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

  // don't know how to connect the navbar with the service
  // getInstantInfo() {
  //   this.userThang.getUserInfo
  //     .subscribe(
  //       (userCreditsInfo: any) => {
  //
  //       }
  //     )
  // }

  logMeOut() {
    this.authThang.logOut()
      .subscribe(
        (apiResponse) => {
          this.routerThang.navigate(['/login'])
        }
      );
  }

}

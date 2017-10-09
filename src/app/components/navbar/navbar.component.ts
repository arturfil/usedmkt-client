import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthApiService } from '../../services/auth-api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userInfo: any;

  constructor(
    private authThang: AuthApiService,
    private routerThang: Router
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

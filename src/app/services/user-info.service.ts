import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';


@Injectable()
export class UserInfoService {

  baseUrl: string = environment.apiUrl;

  // // the thing that receives the changes
  // loginStatusSubject = new BehaviorSubject<any>({ isLoggedIn: false });
  //
  // // the thing that broadcasts the changes
  // loginStatusNotifier = this.loginStatusSubject.asObservable();

  constructor(
    // private httpThang: HttpClient
  ) { }

  // Also found in the auth-api/service

  // GEt/api/checklogin
  // getLoginStatus() {
  //   return (
  //     this.httpThang.get(
  //       this.baseUrl + '/api/checklogin',
  //       { withCredentials: true }
  //     )
  //     .do((loggedInInfo) => {
  //       this.loginStatusSubject.next(loggedInInfo);
  //     })
  //   );
  // }

  //Get/api/checklogin
  // getUserInfo() {
  //   return (
  //     this.httpThang.get(
  //       this.baseUrl + '/api/checklogin',
  //         {withCredentials: true}
  //       )
  //         .do((loggedInInfo) => {
  //           this.loginStatusSubject.next(loggedInInfo);
  //         })
  //     );
  // }

}

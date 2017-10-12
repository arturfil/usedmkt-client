import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ItemApiService } from '../../services/item-api.service';
import { AuthApiService } from '../../services/auth-api.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  imageDomain = environment.apiUrl;
  itemInfo: any = {};
  userInfo: any;
  counter: number = 0;

  constructor(
    private activatedThang: ActivatedRoute,
    private routerThang: Router,
    private itemThang: ItemApiService,
    private authThang: AuthApiService
  ) { }

  ngOnInit() {
    this.activatedThang.params.subscribe((myParams) => {
      this.itemThang.getItemDetails(myParams.itemId)
        .subscribe(
          (theItemFromApi) => {
            this.itemInfo = theItemFromApi;
          }
        );
    });

    this.authThang.getLoginStatus()
      .subscribe(
        (loggedInInfo: any) => {
          if (loggedInInfo.isLoggedIn) {
            this.userInfo = loggedInInfo.userInfo;
          }
        }
      );
  }

  informAuction() {
    console.log("Inform Service")
    this.itemThang.startAuction(this.itemInfo._id).subscribe(
      (item) => {
        console.log("Item retrieved succesfully")
        console.log(item)

        this.itemInfo = item;
      }
    )
  }

  deleteClick() {
    this.itemThang.deleteItem(this.itemInfo._id)
      .subscribe(
        () => {
          this.routerThang.navigate(['']);
        }
      )
  }

}

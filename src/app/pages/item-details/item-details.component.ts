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
now = new Date()

  imageDomain = environment.apiUrl;
  itemInfo: any = {};
  userInfo: any;
  counter: number = null;
  bidValue: number = null;
  bids: any;

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

  auctionEnded() {
    var today = new Date;
    if (!this.itemInfo || !this.itemInfo.finalDate) {
      return false;
    }
    if (today > this.itemInfo.finalDate) {
      return true;
    } else {
      return false;
    }
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

  informBid() {
    console.log(this.bidValue);
    this.itemThang.submitBid(this.itemInfo._id, this.bidValue)
      .subscribe(
        (itemFromApi: any) => {
          this.itemInfo = itemFromApi
        },
        (err) => {
          console.log(err);
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

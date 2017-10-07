import { Component, OnInit } from '@angular/core';

import { ItemApiService } from '../../services/item-api.service';
import { AuthApiService } from '../../services/auth-api.service';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  imageDomain = environment.apiUrl;

  isFormOn = false;
  items: any[] = [];

  userInfo: any;

  constructor(
    private itemThang: ItemApiService,
    private authThang: AuthApiService
  ) { }

  ngOnInit() {
    this.itemThang.getItems()
      .subscribe(
        (itemsFromApi: any[]) => {
          this.items = itemsFromApi;
        }
      );

      this.authThang.getLoginStatus()
        .subscribe(
          (loggedInInfo: any) => {
            if (loggedInInfo.isLoggedIn) {
              this.userInfo = loggedInInfo.userInfo;
            }
          }
        );
  }

  showsForm() {
    if (this.isFormOn) {
      this.isFormOn = false;
    } else {
      this.isFormOn = true;
    }
  }

  handleNewItem(theItem) {
    this.items.unshift(theItem);
    this.isFormOn = false;
  }

}

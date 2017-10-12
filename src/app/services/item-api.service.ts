import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ItemInfo } from '../interfaces/item-info';
import { environment } from '../../environments/environment'


@Injectable()
export class ItemApiService {

  baseUrl: string = environment.apiUrl;
  timeLeft: number;
  counter: number = 0;

  constructor(
    private httpThang: HttpClient
  ) { }

  // GET/api/items
  getItems() {
    return this.httpThang.get(
      this.baseUrl + '/api/items'
    );
  }

  // GET/api/items/ID
  getItemDetails(itemId: string) {
    return this.httpThang.get(
      this.baseUrl + '/api/items/' + itemId
    );
  }

  //POST/api/items
  postItem(itemFields: ItemInfo) {
    return this.httpThang.post(
      this.baseUrl + '/api/items/',
      itemFields,
      { withCredentials: true }
    );
  }

  //---------------------------------
  // Methods to start the auction

  //patch /api/items/ID
  itemStatus(itemId: string) {
    return this.httpThang.patch(
      this.baseUrl + '/api/items/' + itemId,
      { withCredentials: true}
    )
  }

  startAuction(itemId: string) {
      return this.httpThang.patch(
        this.baseUrl + '/api/items/auction/' + itemId,
        {},
        {withCredentials: true}
      )
      //time left = (start-date) - (current-date)
    }

  increaseBidNum() {
    this.counter += 1;
  }

  //make another function to keep track of time left?

  // Methods finish here
  //---------------------------------

  // DELETE/api/items/ID
  deleteItem(itemId: string) {
    return this.httpThang.delete(
      this.baseUrl + '/api/items/' + itemId,
      { withCredentials: true }
    );
  }

  //GET/api/myitems
  getMyItems() {
    return this.httpThang.get(
      this.baseUrl + '/api/myitems',
      { withCredentials: true}
    );
  }

}

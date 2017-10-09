import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ItemInfo } from '../interfaces/item-info';
import { environment } from '../../environments/environment'


@Injectable()
export class ItemApiService {

  baseUrl: string = environment.apiUrl;

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

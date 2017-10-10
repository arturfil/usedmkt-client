import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
@Injectable()
export class WalmartApiService {

  baseUrl: string = environment.apiUrl;

  constructor(
    private httpThang: HttpClient
  ) { }

  getPrices() {
    return this.httpThang.get(
      this.baseUrl + "/api/prices"
    );
  }

  getQuery(queryTerm: string) {
    return this.httpThang.get(
      this.baseUrl + '/api/prices/' + queryTerm 
    );
  }

}

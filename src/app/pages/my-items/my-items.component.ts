import { Component, OnInit } from '@angular/core';

//services
import { ItemApiService } from '../../services/item-api.service';
import { AuthApiService } from '../../services/auth-api.service';
import { WalmartApiService } from '../../services/walmart-api.service';
import { environment } from '../../../environments/environment';

//components
import { ItemFormComponent } from '../../components/item-form/item-form.component';

@Component({
  selector: 'app-my-items',
  templateUrl: './my-items.component.html',
  styleUrls: ['./my-items.component.css']
})
export class MyItemsComponent implements OnInit {

  imageDomain = environment.apiUrl;
  errorMessage: string;


  myItems: any[] = [];
  isFormOn = false;
  userInfo: any;
  prices: any;
  queryInput: any;

  constructor(
    private itemThang: ItemApiService,
    private wallThang: WalmartApiService,
    private authThang: AuthApiService
  ) { }

  ngOnInit() {
    this.itemThang.getMyItems()
      .subscribe(
        (listOfItems: any[]) => {
          this.myItems = listOfItems;
        },
        (errInfo) => {
          if (errInfo.status === 401) {
            this.errorMessage = 'You need to be logged in.';
          } else {
            this.errorMessage = 'Something went wrong. Try again later.';
          }
        }
      )
  } 

  showsForm() {
    if (this.isFormOn) {
      this.isFormOn = false;
    } else {
      this.isFormOn = true;
    }
  }

  handleNewItem(submissionInfo) {
    this.myItems.unshift(submissionInfo.item);
    this.wallThang.getQuery(submissionInfo.queryInput)
      .subscribe(
        (pricesFromApi: any) => {
          this.prices = pricesFromApi
          }
        );
    this.isFormOn = false;

  }

}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

//import interface to avoid errors
import { ItemInfo } from '../../interfaces/item-info';
//import services
import { ItemApiService } from '../../services/item-api.service';
import { WalmartApiService } from '../../services/walmart-api.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {

  myUploader = new FileUploader(
    {
      url: environment.apiUrl + '/api/items',
      itemAlias: 'itemImage'
    }
  )

  newItem: ItemInfo = {
    itemName: '',
    itemBrand: '',
    itemImage: '',
    itemValue: null
  }
  queryInput: string;
  errorMessage: string;

  //notifies the parent when a new phone is succesfully added
  @Output() newItemNotifier = new EventEmitter();

  constructor(
    private itemThang: ItemApiService
  ) { }

  ngOnInit() {
  }

  saveNewItem() {
    if (this.myUploader.getNotUploadedItems().length > 0) {
      this.saveItemWithImage()
    } else {
      this.saveItemNoImage()
    }
  }

  saveItemWithImage() {
    this.myUploader.onBuildItemForm = (item, form) => {
      form.append('itemName', this.newItem.itemName);
      form.append('itemBrand', this.newItem.itemBrand);
      form.append('itemValue', this.newItem.itemValue);
    };

    this.myUploader.onSuccessItem = (item, response) => {
      const fullItemDetails = JSON.parse(response);
      console.log('New item success', fullItemDetails);

      // notify the parent about the new item through the output
      this.newItemNotifier.emit({
        item: fullItemDetails,
        queryInput: this.queryInput
      });

      this.errorMessage = '';
      this.newItem = {
        itemName: '',
        itemBrand: '',
        itemImage: '',
        itemValue: 0
      }
    }

    this.myUploader.onErrorItem = (item, response) => {
      console.log('New phone error', response);

      this.errorMessage = 'Unknown error, try again later'
    } // onErrorItem

    //Start the Ajax request
    this.myUploader.uploadAll();
  }

  saveItemNoImage() {
    //send 'this.newItem' to the backend for saving
    this.itemThang.postItem(this.newItem)
      .subscribe(
        (fullItemDetails) => {
          console.log('New phone success', fullItemDetails);
          this.newItemNotifier.emit({
            item: fullItemDetails,
            queryInput: this.queryInput
          });

          this.errorMessage = '';
          this.newItem = {
            itemName: '',
            itemBrand: '',
            itemImage: '',
            itemValue: 0
          }
        },
        (errorInfo) => {
          console.log('New item error', errorInfo);
          if(errorInfo.status === 400) {
            this.errorMessage = 'Validation Error.'
          } else {
            this.errorMessage = 'Unknown error. Try again later.'
          }
        }
      )
  }

}

import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent{

  show: boolean = false;

  onClick(){
    console.log("button clicked");
  }

  showDetails(event){
    this.show = !this.show;
  }


}

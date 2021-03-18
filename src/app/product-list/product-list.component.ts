import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products = products;
  classesApplied: string = 'italics bold';
  boldClass: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  share(){
    window.alert("Product has been shared!");
  }

  onNotify(){
    window.alert("You will be notified when product goes on sale!");
  }

}

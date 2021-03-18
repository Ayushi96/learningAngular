import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  isBold: boolean = true;
  fontSize: number = 30;
  isItalic: boolean = true;

  setStyle(){
    let style = {
      'font-size.px' : this.fontSize,
      'font-weight' : this.isBold? 'bold': 'normal', 
      'font-style' : this.isItalic? 'italic': 'normal'
    }
    return style;
  }
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

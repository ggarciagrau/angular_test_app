import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product: Product;
  @Input() index: number;
  @Output() updateProductEvt = new EventEmitter<Product>();
  @Output() deleteProductEvt = new EventEmitter<Product>();

  constructor() { 
    this.product = new Product(null, "", "", null, "");
    this.index = 0;
  }

  isNumber(val: any): boolean { return typeof val === 'number'; }

  updateProduct(): void {
    this.updateProductEvt.emit(this.product);
  }

  deleteProduct(): void {
    this.deleteProductEvt.emit(this.product);
  }

  ngOnInit(): void {
  }

}

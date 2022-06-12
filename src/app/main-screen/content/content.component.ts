import { Component, OnInit } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Product } from 'src/app/models/Product';
import { ProductCategory } from 'src/app/models/ProductCategory';

import { ProductsService } from 'src/app/services/products-service/products.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  selectedProduct: Product;
  products$: Observable<Product[]> = of([]);

  constructor(private productsService: ProductsService) {
    this.products$ = this.productsService.get(); 
    this.selectedProduct = new Product(null, "", "", null, "", 0, new ProductCategory(0, ""));
  }

  updateProduct(product: Product) {
    this.selectedProduct = product;
    document.getElementById("productFormButton")?.click();
  }

  deleteProduct(product: Product) {
    this.selectedProduct = product;
    document.getElementById("deleteProductButton")?.click();
  }

  createProduct() {
    this.selectedProduct = new Product(null, "", "", null, "", 0, new ProductCategory(0, ""));
    document.getElementById("productFormButton")?.click();
  }

  getList() {  
    this.products$ = this.productsService.get();
  }

  ngOnInit(): void {
    this.getList();
  }

}

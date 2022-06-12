import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { environment } from 'src/environments/environment';

import { SessionStorageService } from 'src/app/services/session-storage-service/session-storage.service';
import { ProductsService } from 'src/app/services/products-service/products.service';
import { ProductCategoriesService } from 'src/app/services/productCategoriesService/product-categories.service';

import { Observable, of } from 'rxjs';

import { Product } from 'src/app/models/Product';
import { NotificationService } from 'src/app/services/notification-service/notification.service';
import { ProductCategory } from 'src/app/models/ProductCategory';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  @Input() product: Product;
  @Output() changedStateEvt = new EventEmitter<any>();

  productFormTitles: any = environment.productCrud;
  productCategories$: Observable<ProductCategory[]> = of([]);

  constructor(
    private productsService: ProductsService,
    private sessionStorageService: SessionStorageService,
    private notificationService: NotificationService,
    private productCategoryService: ProductCategoriesService
    ) {
    this.product = new Product(null, "", "", null, "", 0, new ProductCategory(0, ""));
    this.productCategories$ = this.productCategoryService.get(this.sessionStorageService.getSession());
   }

  onSubmit() {
    if (this.product.id) {
      this.updateProduct();
    } else {
      this.createProduct();
    }
  }

  createProduct() {
    this.productsService.post(this.sessionStorageService.getSession(), this.product).subscribe({
      next: (data) => {
        this.changedStateEvt.emit();
        this.notificationService.messageSuccess("Succes", environment.messages.success.productCreated);
        document.getElementById("closeProductForm")?.click();
      },
      error: (err) => {
        this.notificationService.messageError("Error", environment.messages.errors.productNotCreated);
      }
    });
  }

  updateProduct() {
    this.productsService.put(this.sessionStorageService.getSession(), this.product).subscribe({
      next: (data) => {
        this.changedStateEvt.emit();
        this.notificationService.messageSuccess("Succes", environment.messages.success.productUpdated);
        document.getElementById("closeProductForm")?.click();
      },
      error: (err) => {
        this.notificationService.messageError("Error", environment.messages.errors.productNotUpdated);
      }
    });
  }

  ngOnInit(): void {
    console.log(this.product)
  }

}

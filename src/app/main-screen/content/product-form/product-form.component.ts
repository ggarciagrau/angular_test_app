import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { environment } from 'src/environments/environment';

import { SessionStorageService } from 'src/app/services/session-storage-service/session-storage.service';
import { ProductsService } from 'src/app/services/products-service/products.service';

import { Product } from 'src/app/models/Product';
import { NotificationService } from 'src/app/services/notification-service/notification.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  @Input() product: Product;
  @Output() changedStateEvt = new EventEmitter<any>();

  productFormTitles: any = environment.productCrud;

  constructor(
    private productsService: ProductsService,
    private sessionStorageService: SessionStorageService,
    private notificationService: NotificationService
    ) {
    this.product = new Product(null, "", "", null, "");
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
  }

}

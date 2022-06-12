import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { NotificationService } from 'src/app/services/notification-service/notification.service';
import { ProductsService } from 'src/app/services/products-service/products.service';
import { SessionStorageService } from 'src/app/services/session-storage-service/session-storage.service';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  @Input() product: Product;
  @Output() changedStateEvt = new EventEmitter<any>();
  
  productFormTitles: any = environment.productCrud;

  constructor(
    private sessionStorageService: SessionStorageService,
    private productsService: ProductsService,
    private notificationService: NotificationService
  ) { 
    this.product = new Product(null, "", "", null, "");
  }

  delete() {
    this.productsService.delete(this.sessionStorageService.getSession(), this.product).subscribe({
      next: (data) => {
        this.changedStateEvt.emit();
        this.notificationService.messageSuccess("Succes", environment.messages.success.productDeleted);
        document.getElementById("clodeDeleteProduct")?.click();
      },
      error: (err) => {
        this.notificationService.messageError("Error", environment.messages.errors.productNotDeleted);
      }
    })
  }

  ngOnInit(): void {
  }

}

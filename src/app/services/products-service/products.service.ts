import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from 'src/app/models/Product';
import { Session } from 'src/app/models/Session';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiURL = environment.apiURL;
  private headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders(environment.acceptHeader)
  }

  get(): Observable<Product[]> {
    return this.http
      .get<Product[]>(this.apiURL + "/products", { headers: this.headers });
  }

  put(session: Session, product: Product): Observable<Product> {
    let headers = new HttpHeaders({
      Accept: environment.acceptHeader.Accept,
      Authorization: `Bearer ${session.token}`
    });
    return this.http
      .put<Product>(this.apiURL + `/products/${product.id}`, product, { headers });
  }

  post(session: Session, product: Product): Observable<Product> {
    let headers = new HttpHeaders({
      Accept: environment.acceptHeader.Accept,
      Authorization: `Bearer ${session.token}`
    });
    return this.http
      .post<Product>(this.apiURL + `/products/`, product, { headers });
  }

  delete(session: Session, product: Product): Observable<Product> {
    let headers = new HttpHeaders({
      Accept: environment.acceptHeader.Accept,
      Authorization: `Bearer ${session.token}`
    });
    return this.http
      .delete<Product>(this.apiURL + `/products/${product.id}`, { headers });
  }
}

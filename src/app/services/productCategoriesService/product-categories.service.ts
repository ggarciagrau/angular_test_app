import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Session } from 'src/app/models/Session';
import { ProductCategory } from 'src/app/models/ProductCategory';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoriesService {

  private apiURL = environment.apiURL;
  constructor(private http: HttpClient) { }

  get(session: Session): Observable<ProductCategory[]> {
    let headers = new HttpHeaders({
      Accept: environment.acceptHeader.Accept,
      Authorization: `Bearer ${session.token}`
    });
    return this.http
      .get<ProductCategory[]>(this.apiURL + '/product-categories', { headers });
      
  }
}

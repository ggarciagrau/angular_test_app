import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  private apiURL = environment.apiURL;
  private headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders(environment.acceptHeader)
   }
  
  signup() {

  }

  login (body: any): Observable<any> {
    console.log(this.apiURL + "/login")
    return this.http.post<any>(this.apiURL + "/login", body, { headers: this.headers });
  }

  logout () {

  }
}

import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from 'src/app/models/User';
import { Session } from 'src/app/models/Session';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  private apiURL = environment.apiURL;
  private headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders(environment.acceptHeader)
   }
  
  signup(body: User): Observable<Session> {
    return this.http
    .post<Session>(this.apiURL + "/signup", body, { headers: this.headers });
  }

  login (body: any): Observable<Session> {
    return this.http
    .post<Session>(this.apiURL + "/login", body, { headers: this.headers });
  }

  logout (session: Session): Observable<any> {
    let headers = new HttpHeaders({
      Accept: environment.acceptHeader.Accept,
      Authorization: `Bearer ${session.token}`
    });
    return this.http
      .post<any>(this.apiURL + "/logout", null, { headers });
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SessionStorageService } from '../services/session-storage-service/session-storage.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {

  constructor(
    private sessionStorageService: SessionStorageService,
    private router: Router
    ) { }

  ngOnInit(): void {
    if (this.sessionStorageService.getSession().token)
      this.router.navigate(["/main"])
  }

}

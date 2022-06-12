import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SessionStorageService } from '../services/session-storage-service/session-storage.service';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit {

  constructor(
    private sessionStorageService: SessionStorageService,
    private router: Router
    ) { }

  ngOnInit(): void {
    if (!this.sessionStorageService.getSession().token) {
      this.sessionStorageService.removeSession();
      this.router.navigate([""]);
    }
  }

}

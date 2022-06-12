import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from 'src/environments/environment';

import { Session } from 'src/app/models/Session';

import { NotificationService } from 'src/app/services/notification-service/notification.service';
import { SessionStorageService } from 'src/app/services/session-storage-service/session-storage.service';

import { UsersService } from 'src/app/services/users-service/users.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private router: Router,
    private notificationService: NotificationService,
    private usersService: UsersService,
    private sessionStorageService: SessionStorageService
  ) { }

  logout() {
    let session: Session = this.sessionStorageService.getSession();
    this.usersService.logout(session).subscribe({
      next: (data) => {
        this.sessionStorageService.removeSession();
        this.router.navigate([""]);
      },
      error: (error) => {
        this.notificationService.messageError(environment.messages.errors.logoutInvalid, "Error");
      }
    })
  }

  ngOnInit(): void {
  }

}

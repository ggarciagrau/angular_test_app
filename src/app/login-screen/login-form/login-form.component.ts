import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from 'src/environments/environment';

import { ProductCategory } from 'src/app/models/ProductCategory';

import { SessionStorageService } from 'src/app/services/session-storage-service/session-storage.service';
import { NotificationService } from 'src/app/services/notification-service/notification.service';
import { UsersService } from 'src/app/services/users-service/users.service';

import { User } from 'src/app/models/User';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {

  user: User;
  messages = environment.messages;

  constructor(
    private usersService: UsersService, 
    private notificationService: NotificationService,
    private sessionStorageService: SessionStorageService,
    private router: Router,
    ) {
    this.user = new User(null, "", "", "", "");
   }

  onSubmit() {
    this.usersService.login(this.user).subscribe(
      data => {
        this.notificationService.messageSuccess("Success", "Logged in");
        this.sessionStorageService.setSession(data);
        this.router.navigate(["/main"]);
      },
      err => {
        this.notificationService.messageError("Error", "Bad credentials");
      });
  }

  ngOnInit(): void {
  }
}

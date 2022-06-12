import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from 'src/environments/environment';

import { UsersService } from 'src/app/services/users-service/users.service';
import { SessionStorageService } from 'src/app/services/session-storage-service/session-storage.service';
import { NotificationService } from 'src/app/services/notification-service/notification.service';

import { User } from 'src/app/models/User';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  user: User;
  messages = environment.messages;

  constructor(
    private usersService: UsersService,
    private sessionStorageService: SessionStorageService,
    private notificationService: NotificationService,
    private router: Router
  ) { 
    this.user = new User(null, "", "", "", "");
  }

  onSubmit() {
    this.usersService.signup(this.user).subscribe(
      data => {
        this.notificationService.messageSuccess("Success", "Registered succesfully");
        this.sessionStorageService.setSession(data);
        this.router.navigate(["/main"]);
      },
      err => {
        this.notificationService.messageError("Error", err.error.message);
      }
    );
  }

  ngOnInit(): void {
  }

}

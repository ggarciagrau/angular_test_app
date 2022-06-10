import { Component, OnInit } from '@angular/core';

import { UsersService } from 'src/app/services/users-service/users.service';

import { User } from 'src/app/models/User';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  user: User;


  constructor(private usersService: UsersService) {
    this.user = new User("", "")
   }

  onSubmit() {
    this.usersService.login(this.user).subscribe(data => {
      console.log(data);
    });
  }

  ngOnInit(): void {
  }

}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { LoginScreenComponent } from './login-screen/login-screen.component';
import { LoginFormComponent } from './login-screen/login-form/login-form.component';

import { ValidateEmailDirective } from './directives/validate-email/validate-email.directive';
import { ValidatePasswordDirective } from './directives/validate-password/validate-password.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    LoginFormComponent,
    ValidateEmailDirective,
    ValidatePasswordDirective
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

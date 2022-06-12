import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';

import { LoginScreenComponent } from './login-screen/login-screen.component';
import { LoginFormComponent } from './login-screen/login-form/login-form.component';

import { ValidateEmailDirective } from './directives/validate-email/validate-email.directive';
import { ValidatePasswordDirective } from './directives/validate-password/validate-password.directive';
import { RegisterFormComponent } from './login-screen/register-form/register-form.component';
import { ErrorMessageComponent } from './lib/error-message/error-message.component';
import { NotFoundComponent } from './lib/not-found/not-found.component';
import { MainScreenComponent } from './main-screen/main-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    LoginFormComponent,
    ValidateEmailDirective,
    ValidatePasswordDirective,
    RegisterFormComponent,
    ErrorMessageComponent,
    NotFoundComponent,
    MainScreenComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

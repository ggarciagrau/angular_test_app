import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';


import { ValidateEmailDirective } from './directives/validate-email/validate-email.directive';
import { ValidatePasswordDirective } from './directives/validate-password/validate-password.directive';
import { IsDoubleDirective } from './directives/is-double/is-double.directive';

import { LoginScreenComponent } from './login-screen/login-screen.component';
import { LoginFormComponent } from './login-screen/login-form/login-form.component';
import { RegisterFormComponent } from './login-screen/register-form/register-form.component';
import { ErrorMessageComponent } from './lib/error-message/error-message.component';
import { NotFoundComponent } from './lib/not-found/not-found.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { MenuComponent } from './main-screen/menu/menu.component';
import { ContentComponent } from './main-screen/content/content.component';
import { FooterComponent } from './main-screen/footer/footer.component';
import { ProductCardComponent } from './lib/product-card/product-card.component';
import { ProductFormComponent } from './main-screen/content/product-form/product-form.component';
import { DeleteProductComponent } from './main-screen/content/delete-product/delete-product.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    LoginFormComponent,
    ValidateEmailDirective,
    ValidatePasswordDirective,
    IsDoubleDirective,
    RegisterFormComponent,
    ErrorMessageComponent,
    NotFoundComponent,
    MainScreenComponent,
    MenuComponent,
    ContentComponent,
    FooterComponent,
    ProductCardComponent,
    ProductFormComponent,
    DeleteProductComponent
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

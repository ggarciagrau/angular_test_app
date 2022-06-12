import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginScreenComponent } from './login-screen/login-screen.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { NotFoundComponent } from './lib/not-found/not-found.component';

const routes: Routes = [
  {path: '', component: LoginScreenComponent},
  {path: 'main', component: MainScreenComponent},
  {path: '**', component: NotFoundComponent},
  // {path: '', redirectTo: 'login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

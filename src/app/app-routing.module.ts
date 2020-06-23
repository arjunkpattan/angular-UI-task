import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistratnComponent } from './registratn/registratn.component';
import { OtpComponent } from './otp/otp.component';
import { ProdListComponent } from './prod-list/prod-list.component';


const routes: Routes = [
  {path: '', component: RegistratnComponent},
  {path: 'login', component: RegistratnComponent},
  {path: 'otp', component: OtpComponent},
  {path: 'prod-list', component: ProdListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

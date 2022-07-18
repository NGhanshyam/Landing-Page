import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
 {
  path:'', component:LandingPageComponent,pathMatch:"full"
 },
 {
  path:'login', component:LoginComponent
 },
 {
  path:'calculator', component:CalculatorComponent
 },
 {
  path:'userprofile', component:UserProfileComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

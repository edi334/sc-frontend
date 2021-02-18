import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClientRegistrationComponent} from './portal/pages/client-registration/client-registration.component';
import {LandingPageComponent} from './website/pages/landing-page/landing-page.component';

const routes: Routes = [
  {path: 'register-client' , component: ClientRegistrationComponent, pathMatch: 'full'},
  { path: 'home', component: LandingPageComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

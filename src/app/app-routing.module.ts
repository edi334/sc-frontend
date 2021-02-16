import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClientRegistrationComponent} from './portal/pages/client-registration/client-registration.component';

const routes: Routes = [
  {path: 'register-client' , component: ClientRegistrationComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

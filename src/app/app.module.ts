import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './core/components/menu/menu.component';
import { LandingPageComponent } from './website/pages/landing-page/landing-page.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';
import { ClientRegistrationComponent } from './portal/pages/client-registration/client-registration.component';
import {FormsModule} from '@angular/forms';
import {SidebarModule} from 'ng-sidebar';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LandingPageComponent,
    ClientRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    SidebarModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginformComponent } from './loginform/loginform.component';
import { AuthService } from './services/auth.service';
import { HomeComponent } from './home/home.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { RouterModule } from '@angular/router';
import { IsLoggedInService } from './services/isLoggedIn.canactivate.service';
import {routes} from './routes';
import { SignupformComponent } from './signupform/signupform.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { MainMapComponent } from './main-map/main-map.component';

import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { AllUsersComponent } from './all-users/all-users.component';
import { TravellerComponent } from './traveller/traveller.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    HomeComponent,
    UserprofileComponent,
    SignupformComponent,
    EditprofileComponent,
    MainMapComponent,
    AllUsersComponent,
    TravellerComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA38CUyfeOsm6SfB63ej4xaxMdHb-XmqKA'
    })
  ],
  providers: [AuthService, IsLoggedInService],

  bootstrap: [AppComponent]
})
export class AppModule { }

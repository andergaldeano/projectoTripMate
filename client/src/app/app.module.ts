import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//PRIME NG
import { AccordionModule } from 'primeng/components/accordion/accordion';
import { PanelModule } from 'primeng/components/panel/panel';
import { ButtonModule } from 'primeng/components/button/button';
import { RadioButtonModule } from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CarouselModule} from 'primeng/primeng';
import {SharedModule} from 'primeng/primeng';
import {GalleriaModule} from 'primeng/primeng';

import { FileSelectDirective } from "ng2-file-upload";
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
import { ChatComponent } from './chat/chat.component';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { TravellerComponent } from './traveller/traveller.component';
import {UsersService} from './services/users.service';
import { NavigationComponent } from './navigation/navigation.component';
import { PlaceComponent } from './place/place.component';
import {PlaceService} from './services/place.service';
import {PlanService} from './services/plan.service';
import { UnicPlanComponent } from './unic-plan/unic-plan.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    HomeComponent,
    UserprofileComponent,
    SignupformComponent,
    EditprofileComponent,
    MainMapComponent,
    TravellerComponent,
    NavigationComponent,
    PlaceComponent,
    ChatComponent,
    UnicPlanComponent,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    HttpModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    AccordionModule,
    PanelModule,
    GalleriaModule,
    ButtonModule,
    RadioButtonModule,
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA38CUyfeOsm6SfB63ej4xaxMdHb-XmqKA',
      libraries: ["places"]
    })
  ],
  providers: [AuthService, IsLoggedInService, UsersService, PlaceService, PlanService],

  bootstrap: [AppComponent]
})
export class AppModule { }

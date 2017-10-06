import { Routes } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {UserprofileComponent} from './userprofile/userprofile.component';
import {LoginformComponent} from './loginform/loginform.component';
import {SignupformComponent} from './signupform/signupform.component';
import {EditprofileComponent} from './editprofile/editprofile.component';
import { MainMapComponent } from './main-map/main-map.component';
import { TravellerComponent } from './traveller/traveller.component';
import { PlaceComponent } from './place/place.component';


import { AllUsersComponent } from './all-users/all-users.component';

import {IsLoggedInService} from './services/isLoggedIn.canactivate.service';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'user',  component: UserprofileComponent, canActivate: [ IsLoggedInService ]  },
    { path: 'editprofile/:id',  component: EditprofileComponent  },
    { path: 'login',  component: LoginformComponent,  },
    { path: 'signup',  component: SignupformComponent,  },
    { path: 'map',  component: MainMapComponent,  },
    { path: 'allusers',  component: AllUsersComponent,  },
    { path: 'traveller/:id', component: TravellerComponent },
    { path: 'holiday/:id', component: PlaceComponent },
    // { path: 'logaut/', component: TravellerComponent },

    { path: '**', redirectTo: '' }
];

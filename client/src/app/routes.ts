import { Routes } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {UserprofileComponent} from './userprofile/userprofile.component';
import {LoginformComponent} from './loginform/loginform.component';
import {SignupformComponent} from './signupform/signupform.component';
import {EditprofileComponent} from './editprofile/editprofile.component';
import { MainMapComponent } from './main-map/main-map.component';
import { TravellerComponent } from './traveller/traveller.component';
import { PlaceComponent } from './place/place.component';
import { UnicPlanComponent } from './unic-plan/unic-plan.component';
import { PlanOkComponent } from './plan-ok/plan-ok.component';



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
    { path: 'plan/:user', component: TravellerComponent },
    { path: 'holiday/:id/:name/:otherLat/:otherLng', component: PlaceComponent },
    { path: 'plan', component: PlaceComponent },
    { path: 'plan/:place', component: PlaceComponent },
    { path: 'conexion/:place', component: PlaceComponent },
    { path: 'allphotos/:place', component: PlaceComponent },
    { path: 'unicPlan/:id', component: UnicPlanComponent },
    { path: 'comment', component: UnicPlanComponent },
    { path: 'user/:planId', component: UnicPlanComponent },
    { path: 'goingPlan/:userId', component: TravellerComponent },
    { path: 'comment/:plan', component: UnicPlanComponent },
    { path: 'whoToWhere', component: UnicPlanComponent },
    { path: 'joinThePlan', component: UnicPlanComponent },
    { path: 'planOk/:id/:name/:otherLat/:otherLng', component: PlanOkComponent },
    { path: 'planToMap', component: PlaceComponent },
    { path: 'pointFainder', component: PlaceComponent },
    { path: 'photoPlace', component: PlaceComponent },




    // { path: 'logaut/', component: TravellerComponent },

    { path: '**', redirectTo: '' }
];

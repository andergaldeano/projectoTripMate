import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PlaceService} from '../services/place.service';
import { AuthService } from '../services/auth.service';


// interface LoginForm{
//   plan:string;
// }

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {

  // formInfo:LoginForm = {
  //   plan: "",
  // };
  plan: any;
  details: any;
  user:any;

  allPlans;

  unicPlace;

  constructor(
    public auth:AuthService,
    private router:Router,
    private route:ActivatedRoute,
    public place: PlaceService
  ){

    this.user = this.auth.getUser()
      .subscribe(user => {  this.user = user;})

    }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getPlaceDetails(params['id'])
    });



  }

  getPlaceDetails(id) {
    this.place.get(id)
    .subscribe((place) => {
    this.unicPlace = place;
    console.log("estams rescatando " + place)
    console.log(place)
    console.log("vamos a buscar los planes en " + this.unicPlace.identification )

        this.allPlans = this.place.findPlans(this.unicPlace.identification)
        // .subscribe(()=> {
        // (plans) => console.log(plans)
        // });


    });


  }

  newPlan(){
    if(this.plan != ""){

      this.place.sendMyPlan(this.plan, this.details, this.unicPlace.identification, this.user.username)
      .subscribe(()=> {
        (plan) => console.log(plan)
      });
    } else{
      console.log("ponte un plan locooo");
    }
  }

  // getPlans(){
  //   console.log("vamos a buscar los planes en " + this.unicPlace.identification )
  //   console.log(this.unicPlace.identification )
  //
  //
  // }


}

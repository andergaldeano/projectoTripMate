import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PlaceService} from '../services/place.service';
import { AuthService } from '../services/auth.service';




@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {


  plan: any;
  details: any;
  user:any;

  allConexions;
  allPlans;
  placename;
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
      this.getPlaceDetails(params['id']);

  //OBTENER EL NOMBRE DEL LUGAR SIN GUIONES
      var withSpaces = params['name'];
      withSpaces = withSpaces.replace(/-/g, ' ');
      this.placename = withSpaces
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
        this.allConexions = this.place.findConexion(this.placename)



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

  newConexion(){
    this.place.sendThisConexion(this.placename, this.user.username, this.user._id)
      .subscribe(()=> {
        (plan) => console.log(plan)
      });

  }

}

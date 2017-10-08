import { Component, OnInit,  ViewChild, ElementRef, NgZone } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PlaceService} from '../services/place.service';
import { AuthService } from '../services/auth.service';
import { MapsAPILoader } from '@agm/core';
import {} from '@types/googlemaps';




@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {

// GOOGLE MAPS STUFF
  @ViewChild('search') public searchElement: ElementRef;
  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;


// IMPORTANT DETAILS
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
    public place: PlaceService,
    private mapsAPILoader: MapsAPILoader,
   private ngZone: NgZone
  ){

    this.user = this.auth.getUser()
      .subscribe(user => {  this.user = user;})

    }

  ngOnInit() {
    this.mapsAPILoader.load().then(
      ()=>{
      }
    )

    this.route.params.subscribe(params => {
      this.getPlaceDetails(params['id']);

  //OBTENER EL NOMBRE DEL LUGAR SIN GUIONES
      var withSpaces = params['name'];
      withSpaces = withSpaces.replace(/-/g, ' ');
      this.placename = withSpaces

//OBTENER LA LAT CON PUNTOS

      var withDots = params['otherLat'];
      withDots = withDots.split('_').join('.');
      this.lat = Number(withDots)

//OBTENER  LA LNG CON PUNTOS

      var withDots2 = params['otherLng'];
      withDots2 = withDots2.split('_').join('.');
      this.lng = Number(withDots2)


    });
  }

// GET THE PLACE DETAILS AND ALL THE PEOPLE GOING THERE


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

// CREATE NEW PLAN ON THIS SPECIFIC PLACE


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

// CREATE NEW CONEXION THIS USER - THIS PLACE

  newConexion(){
    this.place.sendThisConexion(this.placename, this.user.username, this.user._id)
      .subscribe(()=> {
        (plan) => console.log(plan)
      });
  }

}

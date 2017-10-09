import { Component, OnInit,  ViewChild, ElementRef, NgZone } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PlaceService} from '../services/place.service';
import { AuthService } from '../services/auth.service';
import { MapsAPILoader } from '@agm/core';
import {} from '@types/googlemaps';
import { FileUploader} from "ng2-file-upload";
import { environment} from '../../environments/environment';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

const now = new Date();



@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {
  uploader: FileUploader = new FileUploader({
    url: `${environment.BASEURL}/place/photoPlace`
  });

//DATE STUFF

model: NgbDateStruct;
  date: {year: number, month: number};

// GOOGLE MAPS STUFF
  @ViewChild('search') public searchElement: ElementRef;
  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;


// IMPORTANT DETAILS
  plan: any;
  details: any;
  user:any;
  arrastable: boolean = true;

  allConexions;
  allPlans;
  placename;
  unicPlace;
  allPhotos;
  urlTxatxi= "http://localhost:3000";

// PLAN OK STUFF
  okLat: number;
  okLng: number;
  okName: any;
  okID: any;

// PARA ALMACENAR PUNTOS EN EL MAPA

  allPoints;




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
    this.route.params.subscribe(params => {
      this.getPlaceDetails(params['id']);

      this.okID = params['id'];

//OBTENER EL NOMBRE DEL LUGAR SIN GUIONES

      var withSpaces = params['name'];
      withSpaces = withSpaces.replace(/-/g, ' ');
      this.placename = withSpaces

      this.okName = params['name'];

//OBTENER LA LAT CON PUNTOS

      var withDots = params['otherLat'];
      withDots = withDots.split('_').join('.');
      this.lat = Number(withDots)

      this.okLat = params['otherLat'];


//OBTENER  LA LNG CON PUNTOS

      var withDots2 = params['otherLng'];
      withDots2 = withDots2.split('_').join('.');
      this.lng = Number(withDots2)

      this.okLng = params['otherLng'];

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
        this.allPoints = this.place.getAllPointsInMap()
        this.allPhotos = this.place.getAllPhotos(this.unicPlace.identification)

    });
  }

// CREATE NEW PLAN ON THIS SPECIFIC PLACE

  newPlan(){
    if(this.plan != ""){
      this.model = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
      console.log("y ahi va la fecha!!!!!!!!!!!!!!!!!!!!" + this.model.year + "   " + this.model.month + "    " +  this.model.day)
      this.place.sendMyPlan(this.plan, this.details, this.unicPlace.identification, this.user.username, this.model.year, this.model.month, this.model.day )
      .subscribe((plan)=> {
        this.allPlans = this.place.findPlans(this.unicPlace.identification)
        console.log(plan._id)
        this.place.conexionPlanMap(this.lat, this.lng, this.plan, plan._id)
        .subscribe(()=> {
          this.allPoints = this.place.getAllPointsInMap()

        });

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

// LO QUE PASA CUANDO CLICAS EL marcador

marcadorCliqueado(){
  console.log("se marca el marcador")
}

mapCliqueado($event:any){
  console.log("mapa cliqueado")
    this.lat= $event.coords.lat,
    this.lng= $event.coords.lng,
    this.arrastable=true
console.log(this.lng)
  }

posicionFinalMarcador($event:any){
  console.log("poscicion final")

  this.lat= $event.coords.lat,
  this.lng= $event.coords.lng,
  this.arrastable=true
  console.log(this.lng)

}

// ADD PHOTO TO THIS PLACE
submit() {
   this.uploader.onBuildItemForm = (item, form) => {
     form.append('user', this.user.username);
     form.append('userId', this.user._id);
     form.append('place', this.unicPlace.identification);
   };

   this.uploader.uploadAll();
 }





}

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

// model: NgbDateStruct;
  date: {year: number, month: number, day: number};

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
  comment;

  allComments;
  model;
  isHeGoing;
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


 travelStarts;
 travelFinish;


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

    this.place.isHeGoing(this.placename, this.user._id).subscribe((a)=>{
      this.isHeGoing = a
    })

        this.travelStarts = this.place.getInitDate();
        this.travelFinish =this.place.getFinishDate();
        this.place.findPlans(this.unicPlace.identification, this.travelStarts.year, this.travelStarts.month, this.travelStarts.day, this.travelFinish.year, this.travelFinish.month, this.travelFinish.day)
        .subscribe((plan) => this.allPlans = plan)
        this.allConexions = this.place.findConexion(this.placename)
        this.allPoints = this.place.getAllPointsInMap()
        this.place.getAllPhotos(this.unicPlace.identification).subscribe((todaslasfotos)=>{
          this.allPhotos = todaslasfotos
             })
        this.place.findComments(this.unicPlace.identification).subscribe((res)=> {
          this.allComments = res
          console.log("AQUI ESTAN TODOS LOS COMMENTARIOS")
          console.log(this.allComments)
        })
    });
  }

// CREATE NEW PLAN ON THIS SPECIFIC PLACE

  newPlan(){
    if(this.plan != ""){
      this.date = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
      this.place.sendMyPlan(this.plan, this.details, this.unicPlace.identification, this.user.username, this.model.year, this.model.month, this.model.day,
      this.lat, this.lng )
      .subscribe((plan)=> {
        this.travelStarts = this.place.getInitDate();
        this.travelFinish =this.place.getFinishDate();
        this.place.findPlans(this.unicPlace.identification, this.travelStarts.year, this.travelStarts.month, this.travelStarts.day, this.travelFinish.year, this.travelFinish.month, this.travelFinish.day)
        .subscribe((plan) => {
          this.allPlans = plan        // this.place.conexionPlanMap(this.lat, this.lng, this.plan, plan._id)
          // .subscribe(()=> {
          //   this.allPoints = this.place.getAllPointsInMap()
          this.plan = "";
          this.details = "";
          this.model = "";
        })
        //
        // });

      });
    } else{
      console.log("ponte un plan locooo");
    }
  }

// CREATE NEW CONEXION THIS USER - THIS PLACE

  newConexion(){
    this.place.sendThisConexion(this.placename, this.user._id)
      .subscribe(()=> {
        (plan) => console.log(plan)
        this.allConexions = this.place.findConexion(this.placename)
        this.place.isHeGoing(this.placename, this.user._id).subscribe((a)=>{
          this.isHeGoing = a
        })
      });
  }

// LO QUE PASA CUANDO CLICAS EL marcador

marcadorCliqueado(){
  console.log("se marca el marcador")
}

mapCliqueado($event:any){
    this.lat= $event.coords.lat,
    this.lng= $event.coords.lng,
    this.arrastable=true
  }

posicionFinalMarcador($event:any){
  this.lat= $event.coords.lat,
  this.lng= $event.coords.lng,
  this.arrastable=true
}

// ADD PHOTO TO THIS PLACE
submit() {
   this.uploader.onBuildItemForm = (item, form) => {
     form.append('user', this.user.username);
     form.append('userId', this.user._id);
     form.append('place', this.unicPlace.identification);
   };

   this.uploader.uploadAll();
   this.uploader.onCompleteItem = () => {
     this.place.getAllPhotos(this.unicPlace.identification).subscribe((todaslasfotos)=>{
       this.allPhotos = todaslasfotos
          })
   }
 }


 // CREATE NEW COMMENT ON THIS SPECIFIC PLAN


   newComment(){
     if(this.comment != "") {
       this.place.sendMyComment(this.comment, this.unicPlace.identification, this.user._id)
         .subscribe(()=> {
           this.place.findComments(this.unicPlace.identification).subscribe((res)=> {
             this.allComments = res
           })
         })
     }else{
       console.log("ponte un comentario locooo");
     }
   }


}

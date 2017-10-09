import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { MapsAPILoader } from '@agm/core';
import {} from '@types/googlemaps';

import {PlaceService} from '../services/place.service';


//DATE PICKER
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

const equals = (one: NgbDateStruct, two: NgbDateStruct) =>
  one && two && two.year === one.year && two.month === one.month && two.day === one.day;

const before = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day < two.day : one.month < two.month : one.year < two.year;

const after = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day > two.day : one.month > two.month : one.year > two.year;


@Component({
  selector: 'app-main-map',
  templateUrl: './main-map.component.html',
  styleUrls: ['./main-map.component.css']

})
export class MainMapComponent implements OnInit {

//PARA LAS FECHAS

  hoveredDate: NgbDateStruct;

   fromDate: NgbDateStruct;
   toDate: NgbDateStruct;
//PARA LAS FECHAS ^



  @ViewChild('search') public searchElement: ElementRef;

placeName: string = "ninguno";
title: string = 'My first AGM project';
lat: number = 51.678418;
lng: number = 7.809007;

otherLat:  string = "s";
otherLng:  string ="";

id: string = '';

  constructor(
    private mapsAPILoader: MapsAPILoader,
     private ngZone: NgZone,
      calendar: NgbCalendar,
       public router: Router,
     public place: PlaceService/*public place: PlaceService*/
   ) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);}

//  CALENARIO
    onDateChange(date: NgbDateStruct) {
       if (!this.fromDate && !this.toDate) {
         this.fromDate = date;
       } else if (this.fromDate && !this.toDate && after(date, this.fromDate)) {
         this.toDate = date;
       } else {
         this.toDate = null;
         this.fromDate = date;
       }
       }

       isHovered = date => this.fromDate && !this.toDate && this.hoveredDate && after(date, this.fromDate) && before(date, this.hoveredDate);
       isInside = date => after(date, this.fromDate) && before(date, this.toDate);
      isFrom = date => equals(date, this.fromDate);
      isTo = date => equals(date, this.toDate);
      // dates: object = {isfrom: this.isFrom,
      //                 isto: this.isTo}
// CALENDARO^

  ngOnInit() {
    this.mapsAPILoader.load().then(
      ()=>{
        let autocomplete = new google.maps.places.Autocomplete(this.searchElement.nativeElement, {types:["(regions)"]});
        autocomplete.addListener("place_changed", ()=>{
          this.ngZone.run(()=>{
            let place: google.maps.places.PlaceResult = autocomplete.getPlace();

            console.log(autocomplete.getPlace())
            console.log(autocomplete.getPlace().geometry.location.lng())
            console.log(autocomplete.getPlace().geometry.location.lat())


            //PASAMOS LATITUD Y LONGITUD DEL LUGAR PARA PINTAR EN EL MAPA
            this.lat = autocomplete.getPlace().geometry.location.lat();
            this.lng = autocomplete.getPlace().geometry.location.lng();

            //QUITAMOS PUNTOS Y COMAS
            let nocomas = autocomplete.getPlace().formatted_address;
            nocomas = nocomas.replace(/\s+/g, '');
            nocomas = nocomas.replace(/,/g, '')

            this.title = nocomas

            //RESCATAMOS EL NOMBRE DEL LUGAR SIN ESPACIOS
            var placeNameWithoutSPaces = autocomplete.getPlace().name;
            placeNameWithoutSPaces = placeNameWithoutSPaces.replace(/\s+/g, '-')
            this.placeName = placeNameWithoutSPaces;
            console.log("aqui vemos cual es place name " + this.placeName)

            //RESCATAMOS LNG Y LAT SIN PUNTOS
             var stringLat = this.lat.toString()
             this.otherLat = stringLat.split('.').join('_')

             var stringLng = this.lng.toString()
             var prueba = stringLng.split('.').join('_')
             this.otherLng = prueba

             console.log("vamos a ver si funciona " + prueba)

            if(place.geometry === undefined || place.geometry === null){
              return;
            }
          })
        })
      }
    )
  }

  shareAndGo (){
    this.router.navigate([`holiday/${this.title}/${this.placeName}/${this.otherLat}/${this.otherLng}`]);
    console.log("vamos a ver que nos devuelve esto " + this.fromDate.day)
    this.place.copyParams(this.fromDate, this.toDate)
  }

}

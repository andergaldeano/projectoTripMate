import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import {} from '@types/googlemaps';
// import {PlaceService} from '../services/place.service';




@Component({
  selector: 'app-main-map',
  templateUrl: './main-map.component.html',
  styleUrls: ['./main-map.component.css']
})
export class MainMapComponent implements OnInit {

  @ViewChild('search') public searchElement: ElementRef;

placeName: string = "ninguno";
title: string = 'My first AGM project';
lat: number = 51.678418;
lng: number = 7.809007;

id: string = '';

  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone, /*public place: PlaceService*/) {}

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

            //RESCATAMOS EL NOMBRE DEL LUGAR
            this.placeName = autocomplete.getPlace().name;
            console.log("aqui vemos cual es place name " + this.placeName)


            if(place.geometry === undefined || place.geometry === null){
              return;
            }
          })
        })
      }
    )
  };


// POR AHORA ESTO NO SIRVE finandcreate mola mucho mas
//   findThisPlace(){
//     console.log(this.title);
//     this.place.findPlace(this.title);
//     .subscribe((place)=> {this.router.navigate([`holiday/${place._id}`])})
//  }

}

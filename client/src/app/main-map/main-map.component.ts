import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import {} from '@types/googlemaps';




@Component({
  selector: 'app-main-map',
  templateUrl: './main-map.component.html',
  styleUrls: ['./main-map.component.css']
})
export class MainMapComponent implements OnInit {

  @ViewChild('search') public searchElement: ElementRef;

title: string = 'My first AGM project';
lat: number = 51.678418;
lng: number = 7.809007;

  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {}

  ngOnInit() {
    this.mapsAPILoader.load().then(
      ()=>{
        let autocomplete = new google.maps.places.Autocomplete(this.searchElement.nativeElement, {types:["address"]});
        autocomplete.addListener("place_changed", ()=>{
          this.ngZone.run(()=>{
            let place: google.maps.places.PlaceResult = autocomplete.getPlace();
            console.log(place)
            console.log(autocomplete.getPlace().geometry.location)
            console.log(autocomplete.getPlace().geometry.location.lng())
            console.log(autocomplete.getPlace().geometry.location.lat())

            this.lat = autocomplete.getPlace().geometry.location.lat();
            this.lng = autocomplete.getPlace().geometry.location.lng();




            if(place.geometry === undefined || place.geometry === null){
              return;
            }
          })
        })
      }
    )
  }

}

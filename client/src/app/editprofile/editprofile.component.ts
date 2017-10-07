import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../services/auth.service';
import { MapsAPILoader } from '@agm/core';
import {} from '@types/googlemaps';


@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})

export class EditprofileComponent implements OnInit {
  // formInfo = {
  //   country:"",
  //   details:""
  // }
    @ViewChild('search') public searchElement: ElementRef;
  details;
  country;


  constructor(public auth:AuthService, public router: Router, private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) { }

  ngOnInit() {
    this.mapsAPILoader.load().then(
      ()=>{
        let autocomplete = new google.maps.places.Autocomplete(this.searchElement.nativeElement, {types:["(regions)"]});
        autocomplete.addListener("place_changed", ()=>{
          this.ngZone.run(()=>{
            let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //RESCATAMOS EL NOMBRE DEL LUGAR
          this.country = autocomplete.getPlace().name;


            if(place.geometry === undefined || place.geometry === null){
              return;
            }
          })
        })
      }
    )
  };


  editprofile(){
        this.auth.editprofile(this.country, this.details)
      .subscribe(
        (user) => this.router.navigate(['/user']))
  }
}

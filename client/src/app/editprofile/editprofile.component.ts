import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../services/auth.service';
import { MapsAPILoader } from '@agm/core';
import {} from '@types/googlemaps';
import { FileUploader} from "ng2-file-upload";
import { environment} from '../../environments/environment';


@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})

export class EditprofileComponent implements OnInit {

  @ViewChild('search') public searchElement: ElementRef;

  details;
  country;
  userId: string;
  user;
  uploader: FileUploader;
  urlTxatxi= "http://localhost:3000";



  constructor(public auth:AuthService, public router: Router, private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {
    this.user = this.auth.getUser()
      .subscribe(user => {  this.user = user; this.userId = user._id;
      this.uploader = new FileUploader({ url: `${environment.BASEURL}/auth/editprofile/${this.userId}`
     });
    })
  }


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


  editprofile() {
    this.uploader.onBuildItemForm = (item, form) => {
      form.append('country', this.country);
      form.append('details', this.details);
    };
    this.uploader.uploadAll();
    this.uploader.onCompleteItem = () => {
      this.auth.getUser()
        .subscribe(user => {  this.user = user; this.userId = user._id
        });
     }
  }
}

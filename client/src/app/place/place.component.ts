import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PlaceService} from '../services/place.service';
import { AuthService } from '../services/auth.service';


interface LoginForm{
  comment:string;
}

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {

  // formInfo:LoginForm = {
  //   comment: "",
  // };
  comment: any;
  user:any;

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
    });
  }

  newComment(){
    if(this.comment != ""){

      this.place.sendMyComment(this.comment, this.unicPlace.identification, this.user.username)
      .subscribe(()=> {
        (comment) => console.log(comment)
      });
    } else{
      console.log("ponte un comentario locooo");
    }
  }

}

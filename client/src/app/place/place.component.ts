import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PlaceService} from '../services/place.service';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {

  unicPlace;

  constructor(
    private router:Router,
    private route:ActivatedRoute,
    public place: PlaceService) { }

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
    });
  }


}

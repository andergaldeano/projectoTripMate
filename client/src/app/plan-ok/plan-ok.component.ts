import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-plan-ok',
  templateUrl: './plan-ok.component.html',
  styleUrls: ['./plan-ok.component.css']
})
export class PlanOkComponent implements OnInit {

  placeName: string = "ninguno";
  title: string = 'My first AGM project';
  otherLat:  string = "s";
  otherLng:  string ="";

  constructor(    private router:Router,
  private route:ActivatedRoute
) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
    //OBTENER EL NOMBRE DEL LUGAR
      this.placeName = params['name'];


  //OBTENER EL TITULO
      this.title = params['id'];

  //OBTENER LA LAT

      this.otherLat = params['otherLat'];


  //OBTENER  LA LNG

      this.otherLng= params['otherLng'];

    });
  }

}

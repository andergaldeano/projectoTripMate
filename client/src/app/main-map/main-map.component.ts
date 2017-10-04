import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-map',
  templateUrl: './main-map.component.html',
  styleUrls: ['./main-map.component.css']
})
export class MainMapComponent implements OnInit {

title: string = 'My first AGM project';
lat: number = 51.678418;
lng: number = 7.809007;

  constructor() { }

  ngOnInit() {
  }

}

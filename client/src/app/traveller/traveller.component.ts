import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-traveller',
  templateUrl: './traveller.component.html',
  styleUrls: ['./traveller.component.css']
})
export class TravellerComponent implements OnInit {

  unictraveller;

  constructor(private router:Router,
  private route:ActivatedRoute,
  private authService: AuthService,) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getUserDetails(params['id'])
    });
  }

  getUserDetails(id) {
    this.authService.get(id)
    .subscribe((user) => {
    this.unictraveller = user;
    });
  }


}

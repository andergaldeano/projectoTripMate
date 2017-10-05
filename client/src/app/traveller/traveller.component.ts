import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UsersService} from '../services/users.service';

@Component({
  selector: 'app-traveller',
  templateUrl: './traveller.component.html',
  styleUrls: ['./traveller.component.css']
})
export class TravellerComponent implements OnInit {

  unictraveller;

  constructor(private router:Router,
  private route:ActivatedRoute,
  private usersService: UsersService,) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getUserDetails(params['id'])
    });
  }

  getUserDetails(id) {
    this.usersService.get(id)
    .subscribe((user) => {
    this.unictraveller = user;
    });
  }


}

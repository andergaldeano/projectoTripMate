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
  allPlans;
  allPlansGoing;
  urlTxatxi= "http://localhost:3000";



  constructor(private router:Router,
  private route:ActivatedRoute,
  private usersService: UsersService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getUserDetails(params['id'])
    });
  }

  getUserDetails(id) {
    this.usersService.get(id)
    .subscribe((user) => {
    this.unictraveller = user;
    this.allPlans = this.usersService.findPlans(user.username);
    this.allPlansGoing  = this.usersService.findPlansGoing(user._id);
;


    });
  }







}

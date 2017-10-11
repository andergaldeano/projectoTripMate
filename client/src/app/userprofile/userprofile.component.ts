import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {UsersService} from '../services/users.service';


@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  user;
  allPlansProposed;
  allPlansGoing;
  urlTxatxi= "http://localhost:3000";


  constructor(public auth:AuthService,   private usersService: UsersService) {
    this.user = this.auth.getUser()
      .subscribe(user => { console.log(user); this.user = user;     this.getUserDetails(user)})
    this.auth.getLoginEventEmitter()
        .subscribe( user => this.user=user );

  }

  ngOnInit() {
  }

  getUserDetails(user) {
    this.allPlansProposed = this.usersService.findPlans(this.user.username);
    this.allPlansGoing  = this.usersService.findPlansGoing(user._id);
    }

}

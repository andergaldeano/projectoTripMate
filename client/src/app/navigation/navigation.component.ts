import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  user:object;

  constructor(public auth:AuthService) {
    this.user = this.auth.getUser()
      .subscribe(user => { console.log(user); this.user = user;})
    this.auth.getLoginEventEmitter()
        .subscribe( user => this.user=user ); }

  ngOnInit() {
  }

}

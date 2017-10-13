import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  user: any;
  error: string;

  constructor(public auth:AuthService) {
    this.auth.getLoginEventEmitter()
        .subscribe( user => this.user=user );
  }



  ngOnInit() {
  }

  logout() {
    this.auth.logout()
      .subscribe(
        () => this.user = null,
        (err) => this.error = err
      );
  }
}

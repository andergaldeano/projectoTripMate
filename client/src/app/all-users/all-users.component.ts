import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {AuthService} from '../services/auth.service';


@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  travellers;

  constructor(public authService: AuthService ) {  }

  ngOnInit() {
    console.log("hola estamos en all users");
    this.travellers = this.authService.getList();
  }

}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {UsersService} from '../services/users.service';


@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  travellers;

  constructor(public userService: UsersService ) {  }

  ngOnInit() {
    console.log("hola estamos en all users");
    this.travellers = this.userService.getList();
  }


}

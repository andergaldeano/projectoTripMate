import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';

interface LoginForm{
  username:string;
  password:string;
}

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  formInfo:LoginForm = {
    username: "",
    password: ""
  };

  constructor(public auth:AuthService, public router: Router) { }

  ngOnInit() {
    let user = this.auth.getLoggedUser();
    if(user) {
      this.router.navigate([`map`]);
    }
  }

  login(){
    const {username, password} = this.formInfo;
    if(username != "" && password != ""){
      this.auth.login(username, password)
      .subscribe((user)=> {
        if(user.firstTime) {
          this.router.navigate([`editprofile/${user._id}`]);
        } else {
          this.router.navigate([`map`]);
        }
      });
    } else{
      console.log("You must set a username and a password");
    }
  }

}

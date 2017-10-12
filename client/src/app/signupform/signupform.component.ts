import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';



@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.css']
})
export class SignupformComponent implements OnInit {
formInfo = {
  username:"",
  password:""
}
  constructor(public auth:AuthService, public router: Router) { }

  ngOnInit() {
  }

  signup(){
    const {username, password} = this.formInfo;
    if(username != "" && password != ""){
      console.log(`Signup with ${username} ${password}`)
      this.auth.signup(username, password)
      .map(user => console.log(user))
      .subscribe((user)=> this.router.navigate(['/login']));
    } else{
      console.log("Tienes que poner un username y un pasword");
    }
  }

}

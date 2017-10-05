import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../services/auth.service';


@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})

export class EditprofileComponent implements OnInit {
  formInfo = {
    country:"",
    details:""
  }


  constructor(public auth:AuthService, public router: Router) { }

  ngOnInit() {
  }

  editprofile(){
        this.auth.editprofile(/*country, details*/ this.formInfo)
      .subscribe(
        (user) => this.router.navigate(['/user']))
  }
}

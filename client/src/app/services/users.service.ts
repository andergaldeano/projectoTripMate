import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import 'rxjs';
import {environment} from '../../environments/environment';

const BASEURL = environment.BASEURL;


@Injectable()
export class UsersService {

  constructor(private http: Http) { }


// GET ALL USERS LIST
  // getList() {
  //   return this.http.get(`${BASEURL}/allusers`)
  //     .map((res) => res.json());
  // }

// GET A PARTICULAR USER DETAILS
  //
  // get(id) {
  //   return this.http.get(`${BASEURL}/user/${id}`)
  //     .map((res) => res.json());
  // }

}

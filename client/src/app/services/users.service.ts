import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import 'rxjs';
import {environment} from '../../environments/environment';

const BASEURL = environment.BASEURL + "/user";


@Injectable()
export class UsersService {

  constructor(private http: Http) { }


// GET ALL USERS LIST
public getList() {
  return this.http.get(`${BASEURL}/allusers`)
    .map((res) => res.json());
}


// GET A PARTICULAR USER DETAILS

public get(id) {
 return this.http.get(`${BASEURL}/traveller/${id}`)
   .map((res) => res.json());
}

// FIND PLANS PRUPOSED BY SPECIFIC USER

public findPlans(user){
  return this.http.get(`${BASEURL}/plan/${user}`)
  .map((res) => res.json())
}


// FIND PLANS WHERE THIS SPECIFIC USER IS GOING

  public findPlansGoing(userId){
    return this.http.get(`${BASEURL}/goingPlan/${userId}`)
    .map((res) => res.json())

  }

}

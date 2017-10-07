import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import 'rxjs';
import {environment} from '../../environments/environment';

const BASEURL = environment.BASEURL + "/plan";

@Injectable()
export class PlanService {

  constructor(private http: Http) {}

// GET A PARTICULAR PLAN DETAILS

  public getUnicPlan(id) {
    return this.http.get(`${BASEURL}/unicPlan/${id}`)
    .map((res) => res.json());
    }

// CREATE A COMMENT

    public sendMyComment(comment, planid, user){
      console.log("en el servidor creo un commentario")
      return this.http.post(`${BASEURL}/comment`, {comment, planid, user})
      .map((res) => res.json())

    }



}

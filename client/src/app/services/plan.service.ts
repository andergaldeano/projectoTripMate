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

// CREATE A COMMENT ON THIS SPECIFIC PLAN

    public sendMyComment(comment, planid, user){
      console.log("en el servidor creo un commentario")
      return this.http.post(`${BASEURL}/comment`, {comment, planid, user})
      .map((res) => res.json())

    }

// FIND THE COMMENTS ON THE SPECIFIC PLAN

    public findComments(plan){
      console.log("en el servidor buscando planes")
      return this.http.get(`${BASEURL}/comment/${plan}`)
      .map((res) => res.json())

    }





}

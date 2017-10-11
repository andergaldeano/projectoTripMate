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

// CREATE THE CONEXIONS USER - PLAN

  public sendThisConexion( userId, planId){
  console.log("en el servidor creando conexiones entre usuaios y planes")
  return this.http.post(`${BASEURL}/joinThePlan`, { userId, planId})
  .map((res) => res.json())

}

// FIND THE PEOPL THE PLAN

    public findUsers(planId){
      console.log("en el servidor buscando planes")
      return this.http.get(`${BASEURL}/user/${planId}`)
      .map((res) => res.json())

    }

//FIND IF THE USER IS GOING TO THE PLAN OR NOT
 public isHeGoing(planId, userId){
   console.log("a ver si llega")
   console.log(planId + "    y   " +  userId)
   return this.http.get(`${BASEURL}/isHeGoing/${planId}/${userId}`)
   .map((res) => res.json());
   }


}

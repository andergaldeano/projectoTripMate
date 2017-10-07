import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import 'rxjs';
import {environment} from '../../environments/environment';

const BASEURL = environment.BASEURL + "/place";


@Injectable()
export class PlaceService {

  constructor(private http: Http) { }

//FIND OR CREATE THE PLACE

public get(id) {
  console.log("en el servio")
 return this.http.get(`${BASEURL}/holiday/${id}`)
   .map((res) => res.json());
}

// CREATE A PLAN

public sendMyPlan(plan, details, place, user){
  console.log("en el servidor")
  return this.http.post(`${BASEURL}/plan`, {plan, details, place, user})
  .map((res) => res.json())

}

// FIND THE PLANS ON THE SPECIFIC PLACE

public findPlans(place){
  console.log("en el servidor buscando planes")
  return this.http.get(`${BASEURL}/plan/${place}`)
  .map((res) => res.json())

}


// CREATE A CONEXION

public sendThisConexion(place, user){
  console.log("en el servidor creando conexiones")
  return this.http.post(`${BASEURL}/whoToWhere`, {place, user})
  .map((res) => res.json())

}

}

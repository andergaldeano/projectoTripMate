import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import 'rxjs';
import {environment} from '../../environments/environment';

const BASEURL = environment.BASEURL + "/place";

@Injectable()
export class PlaceService {


  dateFrom;
  dateTo;
  urlInfo;

  constructor(private http: Http) { }

public getUrlInfo(){
  return this.urlInfo
}

public getInitDate(){
  return this.dateFrom
}

public getFinishDate(){
  return this.dateTo
}

public copyParams(from, to, title, placeName, otherLat, otherLng){
  this.dateFrom = from
  this.dateTo = to

  this.urlInfo = {title: title, placeName: placeName, otherLat:otherLat, otherLng: otherLng}
}

//FIND OR CREATE THE PLACE

public get(id) {
  console.log("en el servio")
 return this.http.get(`${BASEURL}/holiday/${id}`)
   .map((res) => res.json());
}

// CREATE A PLAN

public sendMyPlan(plan, details, place, user, year, month, day, lat, lng){
  console.log("en el servidor")
  return this.http.post(`${BASEURL}/plan`, {plan, details, place, user, year, month, day, lat, lng})
  .map((res) => res.json())
}

// FIND THE PLANS ON THE SPECIFIC PLACE AND DATE

public findPlans(place, sYear, sMonth, sDay, fYear, fMonth, fDay){
  console.log("en el servidor buscando planes")
  return this.http.get(`${BASEURL}/plan/${place}/${sYear}/${sMonth}/${sDay}/${fYear}/${fMonth}/${fDay}`)
  .map((res) => res.json())
}

// FIND ALL PLANS

public findAllPlans(){
  console.log("en el servidor buscando todos planes")
  return this.http.get(`${BASEURL}/allplans`)
  .map((res) => res.json())
}


// FIND THE PLANS POINTS ON MAP

public getAllPointsInMap(){
  console.log("en el servidor buscando los puntos de los planes")
  return this.http.get(`${BASEURL}/pointFainder/`)
  .map((res) => res.json())
}

// CREATE A CONEXION USER - PLACE

public sendThisConexion(place, userId){
  console.log("en el servidor creando conexiones")
  return this.http.post(`${BASEURL}/whoToWhere`, {place, userId})
  .map((res) => res.json())
}

// FIND THE CONEXIONS ON THE SPECIFIC PLACE

public findConexion(place){
  console.log("en el servidor buscando los tipos que vienen al lugar " + place)
  return this.http.get(`${BASEURL}/conexion/${place}`)
  .map((res) => res.json())
}


// // CREATE A CONEXION ON MAP PLAN - MAP
//
// public conexionPlanMap(lat, lng, planName, planId){
//   console.log("en el servidor creando conexiones plany mapa")
//   return this.http.post(`${BASEURL}/planToMap`, {lat, lng, planName, planId})
//   .map((res) => res.json())
// }


// FIND THE CONEXIONS ON THE SPECIFIC PLACE

public getAllPhotos(place){
  console.log("en el servidor buscando las fotos que vienen al lugar " + place)
  return this.http.get(`${BASEURL}/allphotos/${place}`)
  .map((res) => res.json())
}

//FIND IF THE USER IS GOING TO THE PLACE OR NOT
 public isHeGoing(place, userId){
   console.log("a ver si llega")
   console.log(place + "    y   " +  userId)
   return this.http.get(`${BASEURL}/isHeGoing/${place}/${userId}`)
   .map((res) => res.json());
   }

// CREATE A COMMENT ON THIS SPECIFIC PLACE

   public sendMyComment(comment, place, userId){
     console.log("en el servidor creo un commentario")
     return this.http.post(`${BASEURL}/comment`, {comment, place, userId})
     .map((res) => res.json())

   }

// FIND THE COMMENTS ON THE SPECIFIC PLACE

   public findComments(place){
     console.log("en el servidor buscando planes")
     return this.http.get(`${BASEURL}/comment/${place}`)
     .map((res) => res.json())

   }


}

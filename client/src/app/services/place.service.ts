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
 return this.http.get(`${BASEURL}/holiday/${id}`)
   .map((res) => res.json());
}

// CREATE A PLAN

public sendMyPlan(plan, details, place, placeName, user, year, month, day, lat, lng){
  return this.http.post(`${BASEURL}/plan`, {plan, details, place, placeName, user, year, month, day, lat, lng})
  .map((res) => res.json())
}

// FIND THE PLANS ON THE SPECIFIC PLACE AND DATE

public findPlans(place, sYear, sMonth, sDay, fYear, fMonth, fDay){
  return this.http.get(`${BASEURL}/plan/${place}/${sYear}/${sMonth}/${sDay}/${fYear}/${fMonth}/${fDay}`)
  .map((res) => res.json())
}

// FIND ALL PLANS

public findAllPlans(){
  return this.http.get(`${BASEURL}/allplans`)
  .map((res) => res.json())
}


// FIND THE PLANS POINTS ON MAP

public getAllPointsInMap(){
  return this.http.get(`${BASEURL}/pointFainder/`)
  .map((res) => res.json())
}

// CREATE A CONEXION USER - PLACE

public sendThisConexion(place, userId){
  return this.http.post(`${BASEURL}/whoToWhere`, {place, userId})
  .map((res) => res.json())
}

// FIND THE CONEXIONS ON THE SPECIFIC PLACE

public findConexion(place){
  return this.http.get(`${BASEURL}/conexion/${place}`)
  .map((res) => res.json())
}

// FIND THE CONEXIONS ON THE SPECIFIC PLACE

public getAllPhotos(place){
  return this.http.get(`${BASEURL}/allphotos/${place}`)
  .map((res) => res.json())
}

//FIND IF THE USER IS GOING TO THE PLACE OR NOT
 public isHeGoing(place, userId){
   return this.http.get(`${BASEURL}/isHeGoing/${place}/${userId}`)
   .map((res) => res.json());
   }

// CREATE A COMMENT ON THIS SPECIFIC PLACE

   public sendMyComment(comment, place, userId){
     return this.http.post(`${BASEURL}/comment`, {comment, place, userId})
     .map((res) => res.json())
   }

// FIND THE COMMENTS ON THE SPECIFIC PLACE

   public findComments(place){
     return this.http.get(`${BASEURL}/comment/${place}`)
     .map((res) => res.json())
   }


}

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

// CREATE THE COMMENT

public sendMyComment(comment, place, user){
  console.log("en el servidor")
  return this.http.post(`${BASEURL}/comment`, {comment, place, user})
  .map((res) => res.json())

}


}

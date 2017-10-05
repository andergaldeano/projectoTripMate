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
  console.log("estamos en angular aun buscando todos los users")
  return this.http.get(`${BASEURL}/allusers`)
    .map((res) => res.json());
}


// GET A PARTICULAR USER DETAILS

public get(id) {
 return this.http.get(`${BASEURL}/traveller/${id}`)
   .map((res) => res.json());
}

}

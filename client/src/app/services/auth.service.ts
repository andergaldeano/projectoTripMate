import { Injectable, EventEmitter } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import 'rxjs';
import {environment} from '../../environments/environment';

const BASEURL = environment.BASEURL + "/auth";

@Injectable()
export class AuthService {

  private user:object;
  private userLoginEvent:EventEmitter<any> = new EventEmitter<any>();
  private options = {withCredentials:true};



  constructor(private http: Http) {
    this.isLoggedIn().subscribe();
  }

  public getLoginEventEmitter():EventEmitter<any>{
    return this.userLoginEvent;
  }

// SHOWS THE CURRENT USER PROFILE

    public getUser(){
      return this.http.get(`${BASEURL}/user`)
        .map((res) => res.json());
    }

    public getLoggedUser() {
      return this.user;
    }
// EDITPROFILE PAGE

  //   public editprofile(country, details) {
   //
  //     console.log("estamos en angular aun " + this.user['_id'])
  //      return this.http.put(`${BASEURL}/editprofile/${this.user['_id']}`, {country, details}, this.options/*{country, details}, this.user*/)
  //      .map((res) => res.json());
  //  }


// SING UP

    signup(username,password) {
      return this.http.post(`${BASEURL}/signup`, {username,password}, this.options)
        .map(res => res.json())
        .map(user => this.emitUserLoginEvent(user, true))
        .catch(this.handleError);
    }

// LOG IN

    login(username,password) {
      return this.http.post(`${BASEURL}/login`, {username,password}, this.options)
        .map(res => res.json())
        .map(user => this.emitUserLoginEvent(user))
        .catch(this.handleError);
    }

//LOGOUT

    // logout() {
    //   return this.http.get(`${BASEURL}/logout`, this.options)
    //     .map(res => res.json())
    //     .map(user => this.emitUserLoginEvent(null))
    //     .catch(this.handleError);
    // }

    logout() {
    this.user = null;
    return this.http.post(`${BASEURL}/logout`, this.options)
      .map(res => res.json())
       .map(user => this.emitUserLoginEvent(null))
      .catch(this.handleError);
  }

//IS LOGGED IN

    isLoggedIn() {
      return this.http.get(`${BASEURL}/loggedin`, this.options)
        .map(res => res.json())
        .map(user => this.emitUserLoginEvent(user))
        .catch(this.handleError);
    }

// OTHERS

    private emitUserLoginEvent(user, isSignup = null){
      if(!isSignup) {
        this.user = user;
      }
      this.userLoginEvent.emit(user);
      return user;
    }

    private handleError(e) {
      console.log("AUTH ERROR");
      return Observable.throw(e.json().message);
    }


}

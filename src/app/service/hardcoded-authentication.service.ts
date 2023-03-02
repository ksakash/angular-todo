import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(user: string, password: string) {
      // console.log("before " + this.isUserLoggedIn());
      if(user === 'ksakash' && password === 'dummy') {
        sessionStorage.setItem('authenticaterUser', user);
        // console.log("after " + this.isUserLoggedIn());
        return true;
      }
      return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticaterUser');
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('authenticaterUser');
  }
}

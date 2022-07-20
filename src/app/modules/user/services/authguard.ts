import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import firebase from 'firebase/compat/app';
import { UsersService } from "./users.service";
import {UserModel} from '../models/userModel'


import "firebase/auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";
@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, public User: UsersService) {}
  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    return new Promise((resolve, reject) => {
      const auth = getAuth()
      onAuthStateChanged(auth,(user) => {
        if (user) {
          console.log('authorised',user)
          this.User.setLoggedUser(new UserModel().setKey(user.uid));
          resolve(true);
        } else {
          console.log('not authorized')
          this.router.navigate(["/users/login"]);
          resolve(false);
        }
      });
    });
  }
}

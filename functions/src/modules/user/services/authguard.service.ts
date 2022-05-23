import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import firebase from 'firebase/compat/app';
import "firebase/auth";
import { UsersService } from "./users.service";
import { UserModel } from "../models/userModel";
@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private users: UsersService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    console.log("can activate");
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged((user: firebase.User) => {
        if (user) {
          console.log("user from auth", user);
          this.users.setLoggedUser(new UserModel(user,user.uid));

          resolve(true);
        } else {
          console.log("User is not logged in");
          this.router.navigate(["/users/login"]);
          console.log("routing to the login");
          resolve(false);
        }
      });
    });
  }
}

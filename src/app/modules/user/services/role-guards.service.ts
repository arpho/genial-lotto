import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot } from "@angular/router";
// import { decode } from "jwt-decode";
import firebase from 'firebase/compat/app';
import "firebase/auth";
import { UsersService } from "./users.service";
import { UserModel } from "../models/userModel";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {configs} from "../../../configs/credentials"

@Injectable({
  providedIn: "root"
})
export class RoleGuardService implements CanActivate {
  public loggedUser: UserModel;
  constructor(public router: Router, public Users: UsersService) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    // this will be passed from the route config
    // on the data property
    console.log('role guard')
    const expectedRole = route.data.expectedRole[0];
    const firebaseApp = firebase.initializeApp(configs.firebase)
    const auth = getAuth(firebaseApp)
    onAuthStateChanged(auth,((user: firebase.User) => {
      if (user) {
        if (!this.Users.getLoggedUser()) {
        }
        return true;
      } else {
        this.router.navigate(["/users/login"]);
      }
    }));
    auth
      .currentUser.getIdTokenResult(true)
      .then(token => {
        console.log("claims", token.claims);
        // tslint:disable-next-line: curly
        if (token.claims.level <= expectedRole.level) return true;
        else {
          const message =
            "per accedere a questa funzione devi godere almeno dei privilegi di " +
            expectedRole.key +
            ". per chiarimenti rivolgiti all'amministratore";
          this.router.navigate(["user/not-authorized", message]);
        }
      });

    // const token = localStorage.getItem("token");
    // decode the token to get its payload
    // const tokenPayload = decode(token);
    /* 
    if (tokenPayload.role !== expectedRole) {
      this.router.navigate(["login"]);
      return false;
    }*/
    console.log("logged user", this.Users.getLoggedUser());
    return true; // this.Users.getLoggedUser().privileges.isAllowed(expectedRole);
  }
}

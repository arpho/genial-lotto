import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { Observable } from 'rxjs';
import { credentials } from 'src/app/configs/credentials';

@Injectable({
  providedIn: 'root'
})
export class ExpirationTimeGuard implements CanActivate {

  constructor(private router:Router) { }
  isCurrent(expirationTime:string){
    return Number(expirationTime)>= new Date().getTime()
  }
  canActivate(route: ActivatedRouteSnapshot,
     state: RouterStateSnapshot):
      boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

        const app = initializeApp(credentials.firebase)
        let out = false
        const auth = getAuth(app)
        onAuthStateChanged(auth,(async (user:User)=>{
          auth.currentUser.getIdTokenResult(true).then(token=>{
            if(this.isCurrent(token.expirationTime)){
              out =  true
            }
            else{
              const message =
                `il tuo account è scaduto 
                 per chiarimenti rivolgiti all'amministratore`;
              this.router.navigate(["users/not-authorized", message]);
            }
            
          })
        }))
        return out
  }
}

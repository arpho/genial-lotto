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
    console.log(expirationTime,Number(expirationTime)> new Date().getTime())
    return Number(expirationTime)>= new Date().getTime()
  }
  canActivate(route: ActivatedRouteSnapshot,
     state: RouterStateSnapshot):
      boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return new Promise((resolve,reject)=>{
          const app = initializeApp(credentials.firebase)
     
        const auth = getAuth(app)
        onAuthStateChanged(auth,( (user:User)=>{
          auth.currentUser.getIdTokenResult(true).then(token=>{
            console.log("token expiration",token.claims)
            if(this.isCurrent(String(token.claims["expirationTime"]))){
              resolve(true)
            }
            else{
            
              const message =
                `il tuo account è scaduto 
                 per chiarimenti rivolgiti all'amministratore`;
              this.router.navigate(["users/not-authorized", message]);
              resolve(false)
            }
            
          })
        }))
        })

        
        

  }
}

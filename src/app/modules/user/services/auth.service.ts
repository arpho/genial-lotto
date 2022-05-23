import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import { Observable, Subscription } from 'rxjs';
import 'firebase/auth';
import 'firebase/database';
import { DatabaseReference, getDatabase, ref, push } from "firebase/database";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification, Auth, UserCredential, sendPasswordResetEmail } from 'firebase/auth'
import { UserModel } from '../models/userModel'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  auth: Auth

  constructor() { }

  loginUser(email: string, password: string): Promise<any> {
    this.auth = getAuth()

    return signInWithEmailAndPassword(this.auth, email, password);
  }

  resetPassword(email: string): Promise<void> {
    const user = getAuth()
    return sendPasswordResetEmail(user,email);
  }

  signupUser(user:UserModel, string, next?, error?, complete?): Subscription {
    return this.createUserObserver(user.email, user.password).subscribe({
      next: v => {
        sendEmailVerification(v['user'])
        const db = getDatabase()
        const newUser = new UserModel(user).load(user)
        const usersRef = ref(db, '/userProfile')
        console.log('new user',newUser.serialize())
        push(usersRef, newUser.serialize())
        if (next) {
          next(v['user'])
        }
      },
      error: e => {
        console.error('errore', e)

        if (error) {
          error(e)
        }
      },
      complete: () => {
        console.log('ok')
        if (complete) {
          complete()
        }
      }
    })

  }


  createUserObserver(email, pass): Observable<unknown> {
    const auth = getAuth()
    const observer = new Observable(subscriber => {
      createUserWithEmailAndPassword(auth, email, pass)
        .then((userCredential: UserCredential) => {
          subscriber.next(userCredential);
          subscriber.complete();
        })
        .catch((error) => {
          subscriber.error(error);
          subscriber.complete();
        });
    });

    return observer;
  }

  logoutUser(): Promise<void> {
    const user = getAuth()
return  user.signOut()

  }

}
import { Injectable, ComponentFactoryResolver } from "@angular/core";
import firebase from 'firebase/compat/app';
import "firebase/auth";
import "firebase/database";
import { EmailAuthProvider, getAuth, onAuthStateChanged, reauthenticateWithCredential, updatePassword, User } from "firebase/auth";

@Injectable({
  providedIn: "root"
})
export class ProfileService {
  public userProfileReference: firebase.database.Reference;
  public currentUser: User;

  constructor() {
    const auth = getAuth()
    onAuthStateChanged(auth,user => {
      if (user) {
        console.log('user',user.uid)
        this.currentUser = auth.currentUser;
        this.userProfileReference = firebase.database().ref(`/userProfile/${user.uid}/`);

        console.log('profile',this.userProfileReference)
      }
    });
  }

  getUserProfileReference(): firebase.database.Reference {
console.log('getting usr profile reference')
    return this.userProfileReference;
  }

  updateName(firstName: string, lastName: string): Promise<any> {
    return this.userProfileReference.update({ firstName, lastName });
  }

  updateDOB(birthDate: Date): Promise<any> {
    return this.userProfileReference.update({
      birthDate: {
        year: birthDate.getFullYear(),
        month: birthDate.getMonth(),
        day: birthDate.getDate()
      }
    });
  }

  updateEmail(newEmail: string, password: string): Promise<any> {
    const auth = getAuth()
    const user = auth.currentUser
    const out = updatePassword(user,password)

   
    const credential = EmailAuthProvider.credential(auth.currentUser.email,password)
   
     return  reauthenticateWithCredential(auth.currentUser,credential)
      .then(() => {
        this.updateEmail(auth.currentUser.email,newEmail).then(() => {
          this.userProfileReference.update({ email: newEmail });
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  updatePassword(newPassword: string, oldPassword: string): Promise<any> {

    const auth = getAuth()
    const user = auth.currentUser
    
    //const cred = 
    const credential: firebase.auth.AuthCredential = firebase.auth.EmailAuthProvider.credential(
      this.currentUser.email,
      oldPassword
    );
    const out = updatePassword(user,newPassword)
    
    return 
      reauthenticateWithCredential(auth.currentUser,credential)
      .then(() => {
      
      })
      .catch(error => {
        console.error(error);
      });
  }
}

import { initializeApp, getApp } from "firebase/app";

export class MyFirebaseHelper{

    createFirebaseApp = (config = {}) => {
        try {
          return getApp();
        } catch (error) {
          return initializeApp(config);
        }
      };
      
}
import{ Injectable} from "@angular/core";
import * as firebase from "firebase";
import {error} from "util";

@Injectable()
export class AuthService {

  isAuth: false;


  signIn = function () {

  }
  signOut = function () {

  }
  createNewUser(email:string, password:string){
    return new Promise(
      (resolve , reject) =>{
        firebase.auth().createUserWithEmailAndPassword(email,password).then(
          () => {
            resolve();
        },
        (error) => {
            reject(error);
        }
        )
      }
    )
  }
  signInUser(email:string , password:string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
          () => {
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }

    );
  }
  signOutUser(){
    firebase.auth().signOut();
  }
}

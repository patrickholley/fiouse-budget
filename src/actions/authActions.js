import {  } from "../lib/constants/actions";
import firebase from "../lib/utils/FirebaseService";

export function signIn() {
  firebase.signIn();
}

export function signOut() {
  firebase.signOut();
}

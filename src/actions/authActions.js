import { SIGN_IN_ERROR } from "../lib/constants/actions";
import firebase from "../lib/utils/FirebaseService";

export function signIn(action) {
  const { dispatch } = action;
  firebase.signIn();
}

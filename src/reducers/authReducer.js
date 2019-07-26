import {
  SIGN_IN_REQUEST,
  SIGN_IN_RESPONSE,
  SIGN_IN_ERROR,
  FIREBASE_AUTH_INITIALIZE
} from "../lib/constants/actions";
import networkStatus from "../lib/constants/networkStatus";


export const initialState = {
  firebaseAuthInitialized: false,
  signInStatus: networkStatus.CLEAR,
  user: null
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch(type) {
    case FIREBASE_AUTH_INITIALIZE:
      return { ...state, firebaseAuthInitialized: true };
    case SIGN_IN_REQUEST:
      return { ...state, signInStatus: networkStatus.IN_PROGRESS };
    case SIGN_IN_RESPONSE:
      return { ...state, signInStatus: networkStatus.SUCCESS, user: payload.user };
    case SIGN_IN_ERROR:
      return { ...state, signInStatus: payload.signInStatus };
    default:
      return state;
  }
}

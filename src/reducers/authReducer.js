import {
  AUTH_STATE_CHANGED,
  SIGN_IN_REQUEST
} from "../lib/constants/actions";
import networkStatus from "../lib/constants/networkStatus";


export const initialState = {
  initialized: false,
  signInStatus: networkStatus.CLEAR,
  user: null
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch(type) {
    case AUTH_STATE_CHANGED:
      return { ...state, initialized: true, user: payload.user };
    case SIGN_IN_REQUEST:
      return { ...state, signInStatus: networkStatus.IN_PROGRESS };
    default:
      return state;
  }
}

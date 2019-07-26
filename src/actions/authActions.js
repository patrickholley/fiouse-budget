import { SIGN_IN_RESPONSE } from "../lib/constants/actions";

export function signIn(action, dispatch) {
  dispatch({ type: SIGN_IN_RESPONSE });
}

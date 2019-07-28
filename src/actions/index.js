import { signIn, signOut } from "./authActions";
import { SIGN_IN_REQUEST, SIGN_OUT_REQUEST } from "../lib/constants/actions";

export default {
  [SIGN_IN_REQUEST]: signIn,
  [SIGN_OUT_REQUEST]: signOut
};

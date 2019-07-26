import { signIn } from "./authActions";
import { SIGN_IN_REQUEST } from "../lib/constants/actions";

export default {
  [SIGN_IN_REQUEST]: signIn
};

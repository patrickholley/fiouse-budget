import { useReducer } from "react";
import { UPDATE_USER } from "../lib/constants/actions";

const initialState = { user: null };

function authReducer(state = initialState, action) {
  const { payload, type } = action;

  switch(type) {
    case UPDATE_USER:
      return { user: payload.user };
    default:
      console.error(`Invalid action type ${type}`);
  }
}

export const [authState, authDispatch] = useReducer(authReducer, initialState);

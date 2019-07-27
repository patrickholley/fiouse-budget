import React, { useReducer } from 'react';
import Routes from './routes';
import FirebaseService from "./lib/utils/FirebaseService";
import combinedReducer from "./reducers";
import { FIREBASE_AUTH_INITIALIZE } from './lib/constants/actions';
import { initializeReducerState } from './lib/utils/reducerHelpers';

export const AppContext = React.createContext();
const initialState = initializeReducerState(combinedReducer);

function App() {
  const [state, unboundDispatch] = useReducer(combinedReducer, initialState);

  const dispatch = function(action) {
    unboundDispatch({ ...action, dispatch: unboundDispatch });
  }

  window.addEventListener("authStateChange", e => {
    // conditionally add this if not initialized
    // remove when done
    console.log(e);
    dispatch({ type: FIREBASE_AUTH_INITIALIZE, payload: { user: e.detail.user } });
  });
  
  return (
    <AppContext.Provider
      value={{ dispatch, state }}
    >
      <Routes />
    </AppContext.Provider>
  );
}

export default App;

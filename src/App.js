import React, { useCallback, useReducer } from 'react';
import Routes from './routes';
import FirebaseService from "./lib/utils/FirebaseService";
import combinedReducer from "./reducers";
import { FIREBASE_AUTH_INITIALIZE } from './lib/constants/actions';
import { getInitialReducerState } from './lib/utils/reducerHelpers';

export const AppContext = React.createContext();
const firebase = new FirebaseService();

function App() {
  const [reducerState, dispatch] = useReducer(combinedReducer, getInitialReducerState(combinedReducer));

  window.addEventListener("authStateChange", () => {
    dispatch({ type: FIREBASE_AUTH_INITIALIZE });
  });
  
  return (
    <AppContext.Provider
      value={{
        dispatch,
        firebase,
        reducerState
      }}
    >
      <Routes />
    </AppContext.Provider>
  );
}

export default App;

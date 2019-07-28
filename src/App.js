import React, { useReducer } from 'react';
import Routes from './routes';
import combinedReducer from "./reducers";
import { AUTH_STATE_CHANGED } from './lib/constants/actions';
import { initializeReducerState } from './lib/utils/reducerHelpers';

export const AppContext = React.createContext();
const initialState = initializeReducerState(combinedReducer);

function App() {
  const [state, unboundDispatch] = useReducer(combinedReducer, initialState);

  const dispatch = function(action) {
    unboundDispatch({
      ...action,
      dispatch: unboundDispatch
    });
  }

  window.addEventListener("authStateChange", e => {
    dispatch({
      type: AUTH_STATE_CHANGED,
      payload: { user: e.detail.user }
    });
  });
  
  return (
    <AppContext.Provider
      value={{ dispatch, state }}
    >
      {state.auth.firebaseAuthInitialized
        ? <Routes />
        : <div>Loading . . .</div>
      }
    </AppContext.Provider>
  );
}

export default App;

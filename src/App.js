import React from 'react';
import Routes from './routes';
import FirebaseService, { FirebaseContext } from "./lib/utils/FirebaseService";

function App() {
  return (
    <FirebaseContext.Provider value={new FirebaseService()}>
      <Routes />
    </FirebaseContext.Provider>
  );
}

export default App;

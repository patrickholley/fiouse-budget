export function combineReducers(reducersObject) {
  return function(prevState, type) {
    console.trace();
    const state = {};

    for (let reducer in reducersObject) {
      state[reducer] = reducersObject[reducer](prevState[reducer], type);
      console.log(reducer, state[reducer]);
    }

    return state;
  }
}

export function getInitialReducerState(combinedReducer) {
  return combinedReducer({}, {});
}

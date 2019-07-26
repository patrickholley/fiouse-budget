import Actions from "../../actions";

// implement invokeAction

export function combineReducers(reducersObject) {
  return function(prevState, action) {
    const state = {};

    for (let reducer in reducersObject) {
      state[reducer] = reducersObject[reducer](prevState[reducer], action);
    }

    return state;
  }
}

export function initializeReducerState(combinedReducer) {
  return combinedReducer({}, { type: null });
}

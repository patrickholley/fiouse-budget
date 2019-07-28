function invokeAction(action) {
  const { type } = action;
  const { actions } = this;

  if (actions[type]) actions[type](action);
}

function invokeReducer(prevState, action) {
  const state = {};
  const { reducers } = this;

  for (let reducer in reducers) {
    state[reducer] = reducers[reducer](prevState[reducer], action);
  }

  invokeAction.bind(this)(action);

  return state;
}

export function createCombinedReducer(reducers, actions) {
  return invokeReducer.bind({ reducers, actions });
}

export function initializeReducerState(combinedReducer) {
  return combinedReducer({}, { type: null });
}

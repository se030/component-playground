import { observable } from './observable.mjs';
import reducer from './reducer/index.mjs';

const createStore = (reducer) => {
  const state = observable(reducer());

  const frozenState = {};
  Object.keys(state).forEach((key) => {
    Object.defineProperty(frozenState, key, {
      get: () => state[key],
    });
  });

  const getState = () => frozenState;

  const dispatch = (action) => {
    const newState = reducer(state, action);
    for (const [key, value] of Object.entries(newState)) state[key] = value;
  };

  return { getState, dispatch };
};
const store = createStore(reducer);

export const dispatch = (action) => {
  store.dispatch(action);
};

export default store;

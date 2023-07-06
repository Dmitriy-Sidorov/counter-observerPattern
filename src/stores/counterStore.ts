import { createEvent, createStore } from 'effector';

interface State {
  [key: string]: { count: number };
}

export const counterStore = createStore<State>({ 0: { count: 0 } });

export const createCounter = createEvent<string>();
export const increment = createEvent<string>();
export const decrement = createEvent<string>();

counterStore.on(createCounter, (state, key) => ({
  ...state,
  [key]: { count: 0 },
}));

counterStore.on(increment, (state, key) => ({
  ...state,
  [key]: { count: state[key]!.count + 1 },
}));

counterStore.on(decrement, (state, key) => ({
  ...state,
  [key]: { count: state[key]!.count - 1 },
}));

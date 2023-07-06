import { createEvent, createStore } from 'effector';

export interface Statistics {
  totalCounterCount: number;
  totalChangeCount: number;
}

export const statisticsCounterStore = createStore<Statistics>({
  totalCounterCount: 1,
  totalChangeCount: 0,
});

export const totalCounter = createEvent<number>();
export const totalChange = createEvent<number>();

statisticsCounterStore.on(totalCounter, (state, length) => ({
  ...state,
  totalCounterCount: length,
}));

statisticsCounterStore.on(totalChange, state => ({
  ...state,
  totalChangeCount: state.totalChangeCount + 1,
}));

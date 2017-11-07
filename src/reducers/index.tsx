import { CounterAction } from '../actions';
import { StoreState } from '../types/index';
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants/index';

export function counter(state: StoreState, action: CounterAction): StoreState {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {...state, counterNum: state.counterNum + 1};
    case DECREMENT_COUNTER:
      return {...state, counterNum: Math.max(1, state.counterNum - 1)};
  }
  return state;
}

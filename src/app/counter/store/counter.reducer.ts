import { createReducer, on } from '@ngrx/store'
import { decrement, increment, multiplyBySuccess } from './counter.action'

export interface CounterState {
  decrementCount: number
  incrementCount: number
  value: number
}

export const initialState: CounterState = {
  decrementCount: 0,
  incrementCount: 0,
  value: 1,
}

export const reducer = createReducer(
  initialState,
  on(decrement, (state) => ({
    ...state,
    value: state.value - 1,
    decrementCount: state.decrementCount + 1,
  })),
  on(increment, (state) => ({
    ...state,
    value: state.value + 1,
    incrementCount: state.incrementCount + 1,
  })),
  on(multiplyBySuccess, (state, { value }) => ({
    ...state,
    value,
  })),
)

import {createSlice, PayloadAction, typedNoopReducer} from 'ngrx-slice'
import {createAction, createSelector, on} from "@ngrx/store";

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

export const double = createAction('double')

const sliceActionNameGetter = (feature, action) => {
  return `[${feature}] ${action} @@ 🐝`
}
export const { actions: counterActions, selectors: counterSelectors, ...counterFeature } = createSlice({
  name: 'counter',
  initialState,
  sliceActionNameGetter,
  extraReducers: [
      on<CounterState, [typeof double]>(double, (state) => ({...state, value: state.value * 2})),
  ],
  reducers: {
    decrement: (state) => {
      state.decrementCount++
      state.value--
    },
    increment: (state) => {
      state.incrementCount++
      state.value++
    },
    multiplyBy: {
      success: (state, action: PayloadAction<{ value: number }>) => {
        state.value = action.value
      },
      trigger: typedNoopReducer<CounterState, { multiplier: number }>(),
    },
  },
})

export const tenX = createSelector(counterSelectors.selectCounterState,
        s => s.value * 10)

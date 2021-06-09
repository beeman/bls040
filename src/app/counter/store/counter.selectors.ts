import {createFeatureSelector, createSelector} from "@ngrx/store";
import {CounterState} from "./counter.reducer";

export const selectCounter = createFeatureSelector<CounterState>('counter')
export const selectCounterDecrement = createSelector(
    selectCounter,
    s => s.decrementCount,
)
export const selectCounterIncrement = createSelector(
    selectCounter,
    s => s.incrementCount,
)
export const selectCounterValue = createSelector(
    selectCounter,
    s => s.value,
)

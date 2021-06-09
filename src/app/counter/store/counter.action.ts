import {createAction, props} from "@ngrx/store";

export const decrement = createAction('[counter] decrement')
export const increment = createAction('[counter] increment')
export const multiplyBy = createAction('[counter] multiplyBy', props<{ multiplier: number }>())
export const multiplyBySuccess = createAction('[counter] multiplyBySuccess', props<{ value: number }>())

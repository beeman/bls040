import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { selectCounterDecrement, selectCounterIncrement, selectCounterValue } from '../store/counter.selectors'
import {decrement, increment, multiplyBy} from '../store/counter.action'

@Component({
  selector: 'app-counter',
  template: `
    <div class="d-flex align-items-center mt-4 justify-center">
      <button class="btn btn-secondary" (click)="decrement()">
        -
        {{ decrement$ | async }}
      </button>
      <span class="mx-2">
        {{ value$ | async }}
      </span>
      <button class="btn btn-secondary" (click)="increment()">
        +
        {{ increment$ | async }}
      </button>
      <button class="btn btn-secondary" (click)="multiply()">
        Multiply By {{lastMultiplier}}
      </button>
    </div>
  `,
})
export class CounterComponent  {
  readonly decrement$ = this.store.select(selectCounterDecrement)
  readonly increment$ = this.store.select(selectCounterIncrement)
  readonly value$ = this.store.select(selectCounterValue)
  constructor(private readonly store: Store) {}

  lastMultiplier = Math.floor(Math.random() * (9 ) + 1);

  decrement() {
    this.store.dispatch(decrement())
  }

  increment() {
    this.store.dispatch(increment())
  }

  multiply() {
    this.store.dispatch(multiplyBy({ multiplier: this.lastMultiplier }))
    this.lastMultiplier = Math.floor(Math.random() * (9 ) + 1);
  }
}

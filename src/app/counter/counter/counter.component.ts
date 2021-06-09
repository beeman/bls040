import {Component} from '@angular/core'
import {Store} from '@ngrx/store'
import {counterActions, counterSelectors, double, tenX} from "../store/counter.slice";

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
        {{ tenX$ | async }}
      </span>
      <button class="btn btn-secondary" (click)="increment()">
        +
        {{ increment$ | async }}
      </button>
      <button class="btn btn-secondary" (click)="multiply()">
        Multiply By {{lastMultiplier}}
      </button>
      <button class="btn btn-secondary" (click)="double()">
        Double
      </button>
    </div>
  `,
})
export class CounterComponent  {
  readonly decrement$ = this.store.select(counterSelectors.selectDecrementCount)
  readonly increment$ = this.store.select(counterSelectors.selectIncrementCount)
  readonly value$ = this.store.select(counterSelectors.selectValue)
  readonly tenX$ = this.store.select(tenX)
  constructor(private readonly store: Store) {}

  lastMultiplier = Math.floor(Math.random() * (9 ) + 1);

  decrement() {
    this.store.dispatch(counterActions.decrement())
  }

  increment() {
    this.store.dispatch(counterActions.increment())
  }

  multiply() {
    this.store.dispatch(counterActions.multiplyBy.trigger({ multiplier: this.lastMultiplier }))
    this.lastMultiplier = Math.floor(Math.random() * (9 ) + 1);
  }

  double() {
    this.store.dispatch(double())
  }
}

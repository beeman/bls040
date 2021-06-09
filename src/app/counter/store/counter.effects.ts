import {Injectable} from '@angular/core'
import {Actions, concatLatestFrom, createEffect, ofType} from '@ngrx/effects'
import {Store} from '@ngrx/store'
import {map, switchMap} from 'rxjs/operators'
import {timer} from 'rxjs'
import {counterActions, counterSelectors} from "./counter.slice";

@Injectable()
export class CounterEffects {
  constructor(private readonly actions: Actions, private readonly store: Store) {}

  multiplyBy$ = createEffect(() =>
    this.actions.pipe(
      ofType(counterActions.multiplyBy.trigger),
      concatLatestFrom(() => this.store.select(counterSelectors.selectValue)),
      switchMap(([{ multiplier }, currentValue]) =>
        timer(1000).pipe(
          map(() => {
            return counterActions.multiplyBy.success({ value: currentValue * multiplier })
          }),
        ),
      ),
    ),
  )
}

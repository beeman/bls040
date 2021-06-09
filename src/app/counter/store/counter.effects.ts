import { Injectable } from '@angular/core'
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects'
import { Store } from '@ngrx/store'
import { multiplyBy, multiplyBySuccess } from './counter.action'
import { selectCounterValue } from './counter.selectors'
import { map, switchMap } from 'rxjs/operators'
import { timer } from 'rxjs'

@Injectable()
export class CounterEffects {
  constructor(private readonly actions: Actions, private readonly store: Store) {}

  multiplyBy$ = createEffect(() =>
    this.actions.pipe(
      ofType(multiplyBy),
      concatLatestFrom(() => this.store.select(selectCounterValue)),
      switchMap(([{ multiplier }, currentValue]) =>
        timer(1000).pipe(
          map(() => {
            return multiplyBySuccess({ value: currentValue * multiplier })
          }),
        ),
      ),
    ),
  )
}

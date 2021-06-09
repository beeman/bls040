import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {CounterComponent} from './counter/counter.component'
import {StoreModule} from '@ngrx/store'
import {EffectsModule} from '@ngrx/effects'
import {CounterEffects} from './store/counter.effects'
import {counterFeature} from "./store/counter.slice";

@NgModule({
  declarations: [CounterComponent],
  imports: [
    CommonModule,
    //
    StoreModule.forFeature(counterFeature),
    EffectsModule.forFeature([CounterEffects]),
  ],
  exports: [CounterComponent],
})
export class CounterModule {}

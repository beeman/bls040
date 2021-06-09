import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CounterComponent } from './counter/counter.component'
import { StoreModule } from '@ngrx/store'
import { reducer } from './store/counter.reducer'
import { EffectsModule } from '@ngrx/effects'
import { CounterEffects } from './store/counter.effects'

@NgModule({
  declarations: [CounterComponent],
  imports: [
    CommonModule,
    //
    StoreModule.forFeature('counter', reducer),
    EffectsModule.forFeature([CounterEffects]),
  ],
  exports: [CounterComponent],
})
export class CounterModule {}

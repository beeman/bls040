import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-counter></app-counter>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
}

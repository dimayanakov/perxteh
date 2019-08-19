import { Component } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class MainLayoutComponent { }

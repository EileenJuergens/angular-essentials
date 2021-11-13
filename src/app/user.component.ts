import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
  <input type="text" [(ngModel)]="name">
  <p>Hello {{ name }}</p>
  <p>user component</p>
  `
})
export class UserComponent {
  name = 'Eileen';
  onUserInput(event) {
    this.name = event.target.value;
  }
}

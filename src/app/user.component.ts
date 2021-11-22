import { Component, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
  <!-- ngModel for 2 ways binding -->
  <!-- <input type="text" [(ngModel)]="name"> -->
  <input type="text" (input)="onUserInput($event)" [value]="name">
  <p>Hello {{ name }}</p>
  <p>user component</p>
  <app-user-detail></app-user-detail>
  `
})
export class UserComponent {
  @Input() name: any;
  @Output() nameChanged = new EventEmitter<string>();

  onUserInput(event: any) {
    // this.name = event.target.value;
    this.nameChanged.emit(event.target.value)
  }
}

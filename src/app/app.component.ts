import { Component } from '@angular/core';
// import 'lodash'
import { random } from 'lodash'

declare var _: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-essentials';
  rootName = 'Eileen'
  number = 0;
  rootItems = ['Apples', 'Bananas', 'Cherries'];

  onNameChanged(newName: string) {
    this.rootName = newName;
  }

  onIncrease() {
    // this.number = this.number * 2;
    // this.number = _.random(1, 10)
    this.number = random(1, 10)
  }

  onItemWasAdded(newItem: string) {
    this.rootItems.push(newItem);
  }
}

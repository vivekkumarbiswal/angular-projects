import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
  message = 'Hello from Child Component';

  changeMessage() {
    this.message = 'Message change by Parent using ViewChild!';
  }
}

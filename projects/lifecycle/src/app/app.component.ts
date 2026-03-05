import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  message = 'Angular Lifecycle';
  showComponent = true;

  changeMessage() {
    this.message = 'Message Changed!';
  }

  toggleComponent() {
    this.showComponent = !this.showComponent;
  }
}

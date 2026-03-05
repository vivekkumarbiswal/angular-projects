import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface User {
  name: string;
  age: number;
  city: string;
}

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
  @Input() userMessage = '';
  @Input() user!: User;

  @Output() sendMessage = new EventEmitter();

  sendData() {
    this.sendMessage.emit('Data from Child Component');
  }
}

import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

export interface User {
  name: string;
  age: number;
  city: string;
}

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  message = 'Data from Parent Component';

  userData: User = {
    name: 'Vivek Kumar Biswal',
    age: 29,
    city: 'Bangalore',
  };

  msgReceived = '';
  receivedData(event: any) {
    this.msgReceived = event;
  }
}

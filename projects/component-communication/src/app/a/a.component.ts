import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss']
})
export class AComponent {
  constructor(private dataSpurce: DataService){}

  message = "Data from sender component(A)"
  sendMessage(){
    this.dataSpurce.sendData(this.message);
  }
  
}

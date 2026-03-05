import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss']
})
export class BComponent  implements OnInit {
  constructor(private dataSource: DataService){}
  
  msgReceived = ''
  ngOnInit(){
    this.dataSource.getData().subscribe(data => this.msgReceived = data )
  }

}

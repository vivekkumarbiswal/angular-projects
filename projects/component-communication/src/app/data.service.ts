import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  
  private messageSource = new BehaviorSubject("Initial value");
  sendData(msg:any){
    this.messageSource.next(msg);
  }
  getData(){
    return this.messageSource.asObservable()
  }
}

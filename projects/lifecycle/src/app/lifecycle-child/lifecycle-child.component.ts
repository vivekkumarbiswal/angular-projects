import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle-child',
  templateUrl: './lifecycle-child.component.html',
  styleUrls: ['./lifecycle-child.component.scss'],
})
export class LifecycleChildComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() message: string = '';

  logs: string[] = [];

  log(hook: string) {
    console.log(hook);
    this.logs.push(hook);
  }

  constructor() {
    this.log('1️⃣ constructor');
    console.log('Service injected');
  }

  ngOnChanges(changes: SimpleChanges) {
    this.log('2️⃣ ngOnChanges');
    console.log('Parent changed userId');
  }

  ngOnInit() {
    this.log('3️⃣ ngOnInit');
  }

  ngDoCheck() {
    this.log('4️⃣ ngDoCheck');
  }

  ngAfterContentInit() {
    this.log('5️⃣ ngAfterContentInit');
  }

  ngAfterContentChecked() {
    this.log('6️⃣ ngAfterContentChecked');
  }

  ngAfterViewInit() {
    this.log('7️⃣ ngAfterViewInit');
  }

  ngAfterViewChecked() {
    this.log('8️⃣ ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('9️⃣ ngOnDestroy');
  }
}

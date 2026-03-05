import {
  AfterViewInit,
  Component,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements AfterViewInit {
  @ViewChild(ChildComponent) child!: ChildComponent;
  @ViewChildren(ChildComponent) children!: QueryList<ChildComponent>;

  ngAfterViewInit() {
    console.log('Child component loaded', this.child);
    console.log(this.children);
  }

  changeChildMessage() {
    this.child.changeMessage();
  }
  updateAllChildren() {
    this.children.forEach((child) => {
      child.changeMessage();
    });
  }
}

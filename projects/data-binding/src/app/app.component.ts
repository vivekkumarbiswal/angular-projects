import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  interpolationTitle = "Interpolation";
  user:string = "Vivek Kumar Biswal";
  image: any = "https://angular.io/assets/images/logos/angular/angular.png";


  showMsg = ""
  showMessage(){
    this.showMsg = "This is Event Binding";
  }

  text:string = ''
  getInputText(event:any){
    this.text = event.target.value
  }

  show = false;
  toggleBtn(){
    this.show = !this.show
  }

  count = 0;
  Counter(){
    this.count++
  }

  name = '';
  valuePassed(user: string){
    this.name = this.user;
  }

  userName:string = '';
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent {
  name : string = 'Vivek Kumar Biswal';
  age = 30;
  description = 'A Test'
}

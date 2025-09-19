import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ProfileCardComponent } from './projects/profile-card/profile-card.component';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './projects/counter/counter.component';

const routes: Routes = [
  {
    path: "profile-card", component: ProfileCardComponent
  },
  {
    path: "counter", component: CounterComponent
  },

];

@NgModule({
  declarations: [
    AppComponent,
    ProfileCardComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

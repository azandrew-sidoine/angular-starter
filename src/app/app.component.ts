import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mon Application';
  backgroundColor = '#0c2831';


  constructor() {
    // setTimeout(() => {
    //   this.title = 'Mon Application - Mise à Jour';
    // }, 3000);
  }

  onBackgroundChange(color: string) {
    this.backgroundColor = color;
  }
}

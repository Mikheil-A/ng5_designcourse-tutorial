import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  id: number = 0;

  generateNewRandomID() {
    this.id = Math.ceil(Math.random() * 100 + 1);
    console.log(this.id);
  }
}

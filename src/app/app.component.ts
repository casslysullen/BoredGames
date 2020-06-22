import { Component } from '@angular/core';
import { animation } from '@angular/animations';
import { fadeAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeAnimation]
  
  
})
export class AppComponent {


  constructor() {

  }
}

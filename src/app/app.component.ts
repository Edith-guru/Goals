import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  goals:string[];

  constructor(){
    this.goals = ['Watch finding Nemo', 'Buy Cookies', 'Get a new phone case']

  }

}
/*created a new property goals and attributed it to an empty string array.
Created a constructor function and given the empty goals array 3 string values so it is no longer empty*/


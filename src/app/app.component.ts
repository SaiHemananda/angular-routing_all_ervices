import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  loggedIn = true;

  constructor() {
  }
  
  ngOnInit() {
  }

  checkout() {
    if(this.loggedIn) {
      // go to checkout
    } else {
      // go to login route
    }
  }

}

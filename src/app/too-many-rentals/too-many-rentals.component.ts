import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'my-too-many-rentals',
  template: `
    <h2>Whoa there Cowboy!</h2>
    <span>
      That's an awful lot of rentals. Maybe you should slow it down....

    </span>
  `
})
export class TooManyRentalsComponent  {


  constructor() {}

  ngOnInit() {
  }


}
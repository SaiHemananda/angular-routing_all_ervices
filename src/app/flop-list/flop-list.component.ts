import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FlopService } from './flop.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-flop-list',
  templateUrl: './flop-list.component.html',
  styleUrls: [ './flop-list.component.css'
  ]
})
export class FlopListComponent  {
  flops$;
  rentalList: {count:number, titles:string};

  constructor(private flopService: FlopService,
              private router: Router) {

  }

  ngOnInit() {
    this.flops$ = this.flopService.getFlops()
    
    this.getRentalList();
  }

  getRentalList() {
    this.flopService.getRentalList()
    .subscribe(rentalList => {
      
      this.rentalList = rentalList;

      if(this.rentalList.count) {}
      
    })
  }


  onRentClick(event, flop) {
    console.log(event)
    event.stopPropagation();
    event.preventDefault()
    this.flopService.addRental(flop.title);
    this.getRentalList();

    if(this.rentalList.count > 10){
      this.router.navigate(['/toomany']);
    }
  }

}

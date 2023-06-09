import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RentalListComponent } from './rental-list/rental-list.component';

import { WatchListComponent } from './watch-list/watch-list.component';
import { ActorListComponent } from './actor-list/actor-list.component';
import { FlopListComponent } from './flop-list/flop-list.component';
import { FlopDetailsComponent } from './flop-details/flop-details.component';
import { LoginComponent } from './login/login.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FlopEditComponent } from './flop-edit.component';
import { FlopSuggestionComponent } from './flop-suggestion/flop-suggestion.component';
import { TooManyRentalsComponent } from './too-many-rentals/too-many-rentals.component';
import { routingTable } from './routes';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, HttpClientModule,
    RouterModule.forRoot(routingTable)
     ],
  declarations: [ 
    AppComponent, 
    WatchListComponent, 
    ActorListComponent,
    FlopListComponent,
    FlopDetailsComponent,
    RentalListComponent,
    LoginComponent,
    NotFoundComponent,
    FlopEditComponent,
    CheckoutComponent,
    TooManyRentalsComponent,
    FlopSuggestionComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

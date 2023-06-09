import { WatchListComponent } from './watch-list/watch-list.component';
import { ActorListComponent } from './actor-list/actor-list.component';
import { FlopListComponent } from './flop-list/flop-list.component';
import { FlopDetailsComponent } from './flop-details/flop-details.component';
import { FlopEditComponent } from './flop-edit.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FlopSuggestionComponent } from './flop-suggestion/flop-suggestion.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { TooManyRentalsComponent } from './too-many-rentals/too-many-rentals.component';

export const routingTable = [
  { path: 'watchlist', component: WatchListComponent },
  { path: 'flops', component: FlopListComponent },
  { path: 'login', component: LoginComponent },

  { path: '', redirectTo: '/flops', pathMatch: 'full'},
  { path: 'flops/suggestion', component: FlopSuggestionComponent },
  { path: 'flops/:id', component: FlopDetailsComponent },
  { path: 'flops/:id/edit', component: FlopEditComponent },
  { path: 'actors', component: ActorListComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'toomany', component: TooManyRentalsComponent },
  { path: '**', component:  NotFoundComponent },

]
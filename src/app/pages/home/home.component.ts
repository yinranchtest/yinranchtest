import { Component } from '@angular/core';
import { MarketPlaceComponent } from './components/market-place/market-place.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MarketPlaceComponent
  ],

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

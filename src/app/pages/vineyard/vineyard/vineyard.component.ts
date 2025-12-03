import { Component, OnInit } from '@angular/core';
import { VenuesService } from '../../../services/venues/venues.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TopImagesComponent } from '../../top-images/top-images.component';
import { BottomImagesComponent } from '../../bottom-images/bottom-images.component';

@Component({
  selector: 'app-vineyard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TopImagesComponent,
    BottomImagesComponent
  ],
  templateUrl: './vineyard.component.html',
  styleUrl: './vineyard.component.scss'
})
export class VineyardComponent implements OnInit{

  public venues: any[] = [];
  constructor(private router: Router, private _venueService: VenuesService) { }
  ngOnInit(): void {
    this.getLodging()
  }

  getLodging() {
    this._venueService.getVenues().subscribe((data: any) => {
      this.venues = data;
      console.log(this.venues)
    },
      (error: any) => {
        console.log("errror", error)
      });
  }
  clickToShowDetails(id: number) {
    this.router.navigate(['/vineyard', id])
  }

}

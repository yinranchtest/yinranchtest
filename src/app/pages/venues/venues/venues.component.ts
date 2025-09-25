import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { VenuesService } from '../../../services/venues/venues.service';

@Component({
  selector: 'app-venues',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './venues.component.html',
  styleUrl: './venues.component.scss'
})
export class VenuesComponent {


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
    this.router.navigate(['/venues', id])
  }

}

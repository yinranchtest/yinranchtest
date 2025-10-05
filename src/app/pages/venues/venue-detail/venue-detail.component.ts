import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { VenuesService } from '../../../services/venues/venues.service';

@Component({
  selector: 'app-venue-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    GoogleMapsModule
  ],
  templateUrl: './venue-detail.component.html',
  styleUrl: './venue-detail.component.scss'
})
export class VenueDetailComponent implements OnInit {

  center: google.maps.LatLngLiteral = { lat: 38.363161117860884, lng: -122.02977666542918 };
  venueId: any
  venueDetails: any

  currentIndex = 1;
  transitionEnabled = true;

  constructor(private _route: ActivatedRoute, private _venueService: VenuesService) {
    this._route.params.subscribe(
      (venueId: any) => {
        this.venueId = venueId.id
      }
    )
  }
  ngOnInit(): void {
    this.getvenueDetailsById()
  }

  getvenueDetailsById() {
    this._venueService.getVenues().subscribe(
      (response: any) => {
        this.venueDetails = response.find((eachVenue: any) => eachVenue.id == this.venueId)
        console.log(this.venueDetails)
      }
    )
  }

  get loopedImages() {
    const images = this.venueDetails?.images ?? [];
    if (images.length === 0) return [];

    return [images[images.length - 1], ...images, images[0]];
  }

  next() {
    this.currentIndex++;
    if (this.currentIndex === this.loopedImages.length - 1) {
      setTimeout(() => {
        this.transitionEnabled = false;
        this.currentIndex = 1;
        setTimeout(() => this.transitionEnabled = true, 50);
      }, 600);
    }
  }

  prev() {
    this.currentIndex--;
    if (this.currentIndex === 0) {
      setTimeout(() => {
        this.transitionEnabled = false;
        this.currentIndex = this.loopedImages.length - 2;
        setTimeout(() => this.transitionEnabled = true, 50);
      }, 600);
    }
  }

  goToSlide(index: number) {
    console.log(index)
    this.currentIndex = index + 1;
  }

  get actualImages() {
    return this.venueDetails?.images ?? [];
  }

  get displayIndex() {
    const actualLength = this.actualImages.length;
    if (actualLength === 0) return 1;
    if (this.currentIndex < 0) {
      return actualLength;
    }
    if (this.currentIndex === 0) {
      return actualLength;
    }
    if (this.currentIndex >= 1 && this.currentIndex <= actualLength) {
      return this.currentIndex;
    }
    if (this.currentIndex > actualLength) {
      return 1;
    }
    
    return 1; 
  }

}

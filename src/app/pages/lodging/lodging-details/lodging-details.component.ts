import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { LodgingService } from '../../../services/lodging/lodging.service';

@Component({
  selector: 'app-lodging-details',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    GoogleMapsModule
  ],
  templateUrl: './lodging-details.component.html',
  styleUrl: './lodging-details.component.scss'
})
export class LodgingDetailsComponent implements OnInit {

  contactLodging: boolean = false
  center: google.maps.LatLngLiteral = { lat: 38.363161117860884, lng: -122.02977666542918 };
  lodgingId: any
  lodgingDetails: any


  images = [
    'assets/resort/lodging.jpg',
    'assets/resort/lodging.jpg',
    'assets/resort/lodging.jpg'
  ];

  currentIndex = 1;
  transitionEnabled = true;

  constructor(private _route: ActivatedRoute, private _lodgingService: LodgingService) {
    this._route.params.subscribe(
      (lodgingId: any) => {
        this.lodgingId = lodgingId.id
      }
    )
  }
  ngOnInit(): void {
    this.getLodgingDetailsById()
  }

  getLodgingDetailsById() {
    this._lodgingService.getLodgings().subscribe(
      (response: any) => {
        this.lodgingDetails = response.find((eachLodging: any) => eachLodging.id == this.lodgingId)
        console.log(this.lodgingDetails)
      }
    )
  }

  get loopedImages() {
    return [this.lodgingDetails?.images[this.lodgingDetails?.images.length - 1], ...this.lodgingDetails?.images, this.lodgingDetails?.images[0]];
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
    this.currentIndex = index + 1;
  }
}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { RouterModule } from '@angular/router';

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

  constructor() { }
  ngOnInit(): void {

  }
}

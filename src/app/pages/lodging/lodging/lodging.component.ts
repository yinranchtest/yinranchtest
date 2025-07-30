import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-lodging',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './lodging.component.html',
  styleUrl: './lodging.component.scss'
})
export class LodgingComponent implements OnInit {
  venues = [
    { name: 'CASA DEL RIO', image: 'assets/resort/lodging.jpg', capacity: 150 },
    { name: 'THE HEADQUATERS', image: 'assets/resort/lodging.jpg', capacity: 300 },
    { name: 'THE HARPER', image: 'assets/resort/lodging.jpg', capacity: 200 },
    { name: 'DOVE CANYON', image: 'assets/resort/lodging.jpg', capacity: 170 },
    { name: 'HIDDENBROOKE HILLS', image: 'assets/resort/lodging.jpg', capacity: 200 },
    { name: 'THE SANCTUARY', image: 'assets/resort/lodging.jpg', capacity: 120 },
    { name: 'CASA DEL RIO', image: 'assets/resort/lodging.jpg', capacity: 150 },
    { name: 'THE HEADQUATERS', image: 'assets/resort/lodging.jpg', capacity: 300 },
    { name: 'THE HARPER', image: 'assets/resort/lodging.jpg', capacity: 200 },
    { name: 'DOVE CANYON', image: 'assets/resort/lodging.jpg', capacity: 170 },
    { name: 'HIDDENBROOKE HILLS', image: 'assets/resort/lodging.jpg', capacity: 200 },
    { name: 'THE SANCTUARY', image: 'assets/resort/lodging.jpg', capacity: 120 },
  ];
  constructor(private router: Router) { }
  ngOnInit(): void {

  }
  clickToShowDetails() {
    this.router.navigate(['/lodging-detail'])
  }
}

import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-the-inn',
  standalone: true,
  imports: [CommonModule,NgbCarouselModule],
  templateUrl: './the-inn.component.html',
  styleUrl: './the-inn.component.scss'
})
export class TheInnComponent {
  images = [
    '../../../assets/brunch/image69.jpg',
    '../../../assets/brunch/image70.jpg',
    '../../../assets/brunch/image71.jpg'
  ];
}


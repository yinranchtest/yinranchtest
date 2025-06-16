import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-room-atthe-inn',
  standalone: true,
  imports: [ CommonModule,NgbCarouselModule ],
  templateUrl: './room-atthe-inn.component.html',
  styleUrl: './room-atthe-inn.component.scss'
})
export class RoomAttheInnComponent {
images = [
    '../../../assets/brunch/image69.jpg',
    '../../../assets/brunch/image70.jpg',
    '../../../assets/brunch/image71.jpg'
  ];
}

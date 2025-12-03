import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TopImagesComponent } from '../top-images/top-images.component';
import { BottomImagesComponent } from '../bottom-images/bottom-images.component';

@Component({
  selector: 'app-yin-ranch-home',
  standalone: true,
  imports: [
    CommonModule,
    TopImagesComponent,
    BottomImagesComponent
  ],
  templateUrl: './yin-ranch-home.component.html',
  styleUrl: './yin-ranch-home.component.scss'
})
export class YinRanchHomeComponent implements OnInit {
  ngOnInit(): void {
    
  }
}
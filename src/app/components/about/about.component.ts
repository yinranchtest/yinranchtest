import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { YouTubePlayerModule } from '@angular/youtube-player';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [YouTubePlayerModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  overlayImageUrl: string;
  player: any;
  
  constructor() {
    // Set the background image URL
    this.overlayImageUrl = 'assets/images/mtnlux_vid_bg.jpg';  // Use relative path to image
  }

  ngOnInit() {
    const scriptTag= document.createElement('script');
    scriptTag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(scriptTag);
  }
}
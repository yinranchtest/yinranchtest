import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './media.component.html',
  styleUrl: './media.component.scss'
})
export class MediaComponent implements OnInit {

  public allVideos: any

  constructor(private sanitizer: DomSanitizer){}

  ngOnInit(): void {
    this.getAllVideos()
  }


  getAllVideos() {
   const videoUrls = [
      'https://www.youtube.com/embed/9ux44vFS02Q',
      'https://www.youtube.com/embed/9ux44vFS02Q',
      'https://www.youtube.com/embed/9ux44vFS02Q',
      'https://www.youtube.com/embed/9ux44vFS02Q',
      'https://www.youtube.com/embed/9XvpjN5c8fE',
      
    ]

    this.allVideos = videoUrls.map(url => this.sanitizer.bypassSecurityTrustResourceUrl(url));
  }

}

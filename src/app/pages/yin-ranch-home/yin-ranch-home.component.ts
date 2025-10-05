import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-yin-ranch-home',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './yin-ranch-home.component.html',
  styleUrl: './yin-ranch-home.component.scss'
})
export class YinRanchHomeComponent implements OnInit, OnDestroy {
  private animationId: number | null = null;
  private isPaused = false;
  topImages = [
    { url: 'assets/home/rotatingImage1/img1.jpg', caption: 'The bathhouse at sunset, where the water runs directly into the garden.' },
    { url: 'assets/home/rotatingImage1/img2.jpg', caption: 'The bathhouse at sunset, where the water runs directly into the garden.' },
    { url: 'assets/home/rotatingImage1/img3.jpg', caption: 'The bathhouse at sunset, where the water runs directly into the garden.' },
    { url: 'assets/home/rotatingImage1/img4.jpg', caption: 'We worship the Tomato. We even made one of our favorite candles inspired by its ripe, supple, bursting scent.' },
    { url: 'assets/home/rotatingImage1/img5.jpg', caption: 'We worship the Tomato. We even made one of our favorite candles inspired by its ripe, supple, bursting scent.' },
    { url: 'assets/home/rotatingImage1/img6.jpg', caption: 'We worship the Tomato. We even made one of our favorite candles inspired by its ripe, supple, bursting scent.' },
    { url: 'assets/home/rotatingImage1/img7.jpg', caption: 'We worship the Tomato. We even made one of our favorite candles inspired by its ripe, supple, bursting scent.' },
    { url: 'assets/home/rotatingImage1/img8.jpg', caption: 'We worship the Tomato. We even made one of our favorite candles inspired by its ripe, supple, bursting scent.' },
    { url: 'assets/home/rotatingImage1/img9.jpg', caption: 'We worship the Tomato. We even made one of our favorite candles inspired by its ripe, supple, bursting scent.' },
    { url: 'assets/home/rotatingImage1/img10.jpg', caption: 'We worship the Tomato. We even made one of our favorite candles inspired by its ripe, supple, bursting scent.' }
  ];
  bottomImages = [
    'assets/home/rotatingImage2/img1.jpg',
    'assets/home/rotatingImage2/img2.jpg',
    'assets/home/rotatingImage2/img3.jpg',
    'assets/home/rotatingImage2/img4.jpg',
    'assets/home/rotatingImage2/img5.jpg',
    'assets/home/rotatingImage2/img6.jpg',
    'assets/home/rotatingImage2/img7.jpg',
    'assets/home/rotatingImage2/img8.jpg',
  ];

  ngOnInit(): void {
    this.startSeamlessScrolling();
    this.setupHoverEvents();
  }

  ngOnDestroy(): void {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }

  private startSeamlessScrolling(): void {
    const scrollTracks = document.querySelectorAll('.scroll-track');
    const scrollPositions: number[] = Array(scrollTracks.length).fill(0);
    const scrollSpeed = 0.5; 

    const animate = () => {
      if (!this.isPaused) {
        scrollTracks.forEach((track: Element, index: number) => {
          const trackElement = track as HTMLElement;
          const trackWidth = trackElement.scrollWidth / 2; 
          
          scrollPositions[index] += scrollSpeed;
          
          if (scrollPositions[index] >= trackWidth) {
            scrollPositions[index] = 0;
          }
          
          trackElement.style.transform = `translateX(-${scrollPositions[index]}px)`;
        });
      }
      
      this.animationId = requestAnimationFrame(animate);
    };
    
    animate();
  }

  private setupHoverEvents(): void {
    const scrollingWrappers = document.querySelectorAll('.scrolling-wrapper');
    scrollingWrappers.forEach((wrapper: Element) => {
      wrapper.addEventListener('mouseenter', () => {
        this.isPaused = true;
      });
      wrapper.addEventListener('mouseleave', () => {
        this.isPaused = false;
      });
    });
  }

  scrollNext(): void {
    const galleries = document.querySelectorAll('.scrolling-wrapper');
    galleries.forEach((gallery: Element) => {
      const container = gallery as HTMLElement;
      container.scrollBy({ left: 300, behavior: 'smooth' });
    });
  }

  scrollPrev(): void {
    const galleries = document.querySelectorAll('.scrolling-wrapper');
    galleries.forEach((gallery: Element) => {
      const container = gallery as HTMLElement;
      container.scrollBy({ left: -300, behavior: 'smooth' });
    });
  }
}







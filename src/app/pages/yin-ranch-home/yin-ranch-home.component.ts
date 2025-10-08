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
  private topScrollPosition = 0;
  private bottomScrollPosition = 0;
  private topManualScrollActive = false;
  private bottomManualScrollActive = false;
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
    this.initializeScrollTracks();
    this.startSeamlessScrolling();
    this.setupHoverEvents();
  }

  private initializeScrollTracks(): void {
    const scrollTracks = document.querySelectorAll('.scroll-track');
    scrollTracks.forEach((track: Element) => {
      const trackElement = track as HTMLElement;
      trackElement.classList.add('auto-scroll');
    });
  }

  ngOnDestroy(): void {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }

  private startSeamlessScrolling(): void {
    const scrollTracks = document.querySelectorAll('.scroll-track');
    const scrollSpeed = 0.5; 

    const animate = () => {
      if (!this.isPaused) {
        scrollTracks.forEach((track: Element, index: number) => {
          const trackElement = track as HTMLElement;
          const trackWidth = trackElement.scrollWidth / 2; 
          
          if (index === 0 && !this.topManualScrollActive) {
            this.topScrollPosition += scrollSpeed;
            
            if (this.topScrollPosition >= trackWidth) {
              this.topScrollPosition = this.topScrollPosition - trackWidth;
            }
            
            trackElement.style.transform = `translateX(-${this.topScrollPosition}px)`;
          } else if (index === 1 && !this.bottomManualScrollActive) {
            this.bottomScrollPosition += scrollSpeed;
            
            if (this.bottomScrollPosition >= trackWidth) {
              this.bottomScrollPosition = this.bottomScrollPosition - trackWidth;
            }
            
            trackElement.style.transform = `translateX(-${this.bottomScrollPosition}px)`;
          }
        });
      }
      
      this.animationId = requestAnimationFrame(animate);
    };
    
    animate();
  }

  private getCurrentTransform(element: HTMLElement): number {
    const transform = element.style.transform;
    if (!transform || transform === 'none') return 0;
    
    const match = transform.match(/translateX\(-?(\d+(?:\.\d+)?)px\)/);
    return match ? parseFloat(match[1]) : 0;
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

  scrollTopNext(): void {
    const topTrack = document.querySelectorAll('.scroll-track')[0] as HTMLElement;
    if (topTrack) {
      this.topManualScrollActive = true;
      
      topTrack.classList.remove('auto-scroll');
      topTrack.classList.add('manual-scroll');
      
      const scrollAmount = 300;
      const trackWidth = topTrack.scrollWidth / 2;
      
      this.topScrollPosition += scrollAmount;
      
      if (this.topScrollPosition >= trackWidth) {
        topTrack.style.transition = 'none';
        this.topScrollPosition = this.topScrollPosition - trackWidth;
        topTrack.style.transform = `translateX(-${this.topScrollPosition}px)`;
        
        setTimeout(() => {
          topTrack.style.transition = '';
        }, 10);
      } else {
        topTrack.style.transform = `translateX(-${this.topScrollPosition}px)`;
      }
      
      setTimeout(() => {
        this.topManualScrollActive = false;
        topTrack.classList.remove('manual-scroll');
        topTrack.classList.add('auto-scroll');
      }, 600);
    }
  }

  scrollTopPrev(): void {
    const topTrack = document.querySelectorAll('.scroll-track')[0] as HTMLElement;
    if (topTrack) {
      this.topManualScrollActive = true;
      
      topTrack.classList.remove('auto-scroll');
      topTrack.classList.add('manual-scroll');
      
      const scrollAmount = 300;
      const trackWidth = topTrack.scrollWidth / 2;
      
      this.topScrollPosition -= scrollAmount;
      
      if (this.topScrollPosition < 0) {
        topTrack.style.transition = 'none';
        this.topScrollPosition = trackWidth + this.topScrollPosition;
        topTrack.style.transform = `translateX(-${this.topScrollPosition}px)`;
        
        setTimeout(() => {
          topTrack.style.transition = '';
        }, 10);
      } else {
        topTrack.style.transform = `translateX(-${this.topScrollPosition}px)`;
      }
      
      setTimeout(() => {
        this.topManualScrollActive = false;
        topTrack.classList.remove('manual-scroll');
        topTrack.classList.add('auto-scroll');
      }, 600);
    }
  }

  scrollBottomNext(): void {
    const bottomTrack = document.querySelectorAll('.scroll-track')[1] as HTMLElement;
    if (bottomTrack) {
      this.bottomManualScrollActive = true;
      
      bottomTrack.classList.remove('auto-scroll');
      bottomTrack.classList.add('manual-scroll');
      
      const scrollAmount = 300;
      const trackWidth = bottomTrack.scrollWidth / 2;
      
      this.bottomScrollPosition += scrollAmount;
      
      if (this.bottomScrollPosition >= trackWidth) {
        bottomTrack.style.transition = 'none';
        this.bottomScrollPosition = this.bottomScrollPosition - trackWidth;
        bottomTrack.style.transform = `translateX(-${this.bottomScrollPosition}px)`;
        
        setTimeout(() => {
          bottomTrack.style.transition = '';
        }, 10);
      } else {
        bottomTrack.style.transform = `translateX(-${this.bottomScrollPosition}px)`;
      }
      
      setTimeout(() => {
        this.bottomManualScrollActive = false;
        bottomTrack.classList.remove('manual-scroll');
        bottomTrack.classList.add('auto-scroll');
      }, 600);
    }
  }

  scrollBottomPrev(): void {
    const bottomTrack = document.querySelectorAll('.scroll-track')[1] as HTMLElement;
    if (bottomTrack) {
      this.bottomManualScrollActive = true;
      
      bottomTrack.classList.remove('auto-scroll');
      bottomTrack.classList.add('manual-scroll');
      
      const scrollAmount = 300;
      const trackWidth = bottomTrack.scrollWidth / 2;
      
      this.bottomScrollPosition -= scrollAmount;
      
      if (this.bottomScrollPosition < 0) {
        bottomTrack.style.transition = 'none';
        this.bottomScrollPosition = trackWidth + this.bottomScrollPosition;
        bottomTrack.style.transform = `translateX(-${this.bottomScrollPosition}px)`;
        
        setTimeout(() => {
          bottomTrack.style.transition = '';
        }, 10);
      } else {
        bottomTrack.style.transform = `translateX(-${this.bottomScrollPosition}px)`;
      }
      
      setTimeout(() => {
        this.bottomManualScrollActive = false;
        bottomTrack.classList.remove('manual-scroll');
        bottomTrack.classList.add('auto-scroll');
      }, 600);
    }
  }
}







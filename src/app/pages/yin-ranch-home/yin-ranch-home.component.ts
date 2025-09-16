import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-yin-ranch-home',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './yin-ranch-home.component.html',
  styleUrl: './yin-ranch-home.component.scss'
})
export class YinRanchHomeComponent {
  @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef<HTMLDivElement>;
  @ViewChild('scrollWrapper', { static: false }) scrollWrapper!: ElementRef<HTMLDivElement>;

  images = [
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

  ngAfterViewInit(): void {
    this.startAutoScroll();
  }

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

  autoScrollIntervalId: any;
  autoScrollStep = 2;
  autoScrollDelay = 20;

  userInteracting = false;
  resumeTimeoutId: any;
  topContainerInteracting = false;
  bottomContainerInteracting = false;
  topContainerResumeTimeoutId: any;
  bottomContainerResumeTimeoutId: any;

  startAutoScroll(): void {
    this.clearAutoScroll();
    this.autoScrollIntervalId = setInterval(() => {
      this.autoScrollStepForward();
    }, this.autoScrollDelay);
  }

  clearAutoScroll(): void {
    if (this.autoScrollIntervalId) clearInterval(this.autoScrollIntervalId);
  }

  autoScrollStepForward(): void {
    if (!this.topContainerInteracting) {
      this.handleInfiniteScroll(this.scrollWrapper.nativeElement);
    }
    
    if (!this.bottomContainerInteracting) {
      this.handleInfiniteScroll(this.scrollContainer.nativeElement);
    }
  }

  private handleInfiniteScroll(container: HTMLElement): void {
    if (!container) return;
    
    container.scrollLeft += this.autoScrollStep;
    const scrollTrack = container.querySelector('.scroll-track') as HTMLElement;
    if (scrollTrack) {
      const singleSetWidth = scrollTrack.scrollWidth / 2;
      if (container.scrollLeft >= singleSetWidth) {
        container.scrollLeft = container.scrollLeft - singleSetWidth;
      }
    }
  }

  scrollNext(): void {
    this.userInteracting = true;
    this.topContainerInteracting = true;
    this.bottomContainerInteracting = true;
    this.scrollByAmount(300);
    this.setResumeAutoScrollTimer();
  }

  scrollPrev(): void {
    this.userInteracting = true;
    this.topContainerInteracting = true;
    this.bottomContainerInteracting = true;
    this.scrollByAmount(-300);
    this.setResumeAutoScrollTimer();
  }

  scrollByAmount(amount: number): void {
    this.scrollContainerByAmount(this.scrollWrapper.nativeElement, amount);
    this.scrollContainerByAmount(this.scrollContainer.nativeElement, amount);
  }

  private scrollContainerByAmount(container: HTMLElement, amount: number): void {
    if (!container) return;
    
    container.scrollBy({ left: amount, behavior: 'smooth' });
    setTimeout(() => {
      const scrollTrack = container.querySelector('.scroll-track') as HTMLElement;
      if (scrollTrack) {
        const singleSetWidth = scrollTrack.scrollWidth / 2;
        if (container.scrollLeft >= singleSetWidth) {
          container.scrollLeft = container.scrollLeft - singleSetWidth;
        }
      }
    }, 300); 
  }

  pauseAutoScroll(): void {
    this.userInteracting = true;
    this.topContainerInteracting = true;
    this.bottomContainerInteracting = true;
    this.clearAutoScroll();
  }

  resumeAutoScroll(): void {
    this.userInteracting = false;
    this.topContainerInteracting = false;
    this.bottomContainerInteracting = false;
    this.startAutoScroll();
  }

  setResumeAutoScrollTimer(): void {
    clearTimeout(this.resumeTimeoutId);
    clearTimeout(this.topContainerResumeTimeoutId);
    clearTimeout(this.bottomContainerResumeTimeoutId);
    
    this.resumeTimeoutId = setTimeout(() => {
      this.userInteracting = false;
    }, 3000);
    
    this.topContainerResumeTimeoutId = setTimeout(() => {
      this.topContainerInteracting = false;
    }, 3000);
    
    this.bottomContainerResumeTimeoutId = setTimeout(() => {
      this.bottomContainerInteracting = false;
    }, 3000);
  }

  pauseTopContainer(): void {
    this.topContainerInteracting = true;
  }

  resumeTopContainer(): void {
    this.topContainerInteracting = false;
  }

  pauseBottomContainer(): void {
    this.bottomContainerInteracting = true;
  }

  resumeBottomContainer(): void {
    this.bottomContainerInteracting = false;
  }

  ngOnDestroy(): void {
    this.clearAutoScroll();
    clearTimeout(this.resumeTimeoutId);
    clearTimeout(this.topContainerResumeTimeoutId);
    clearTimeout(this.bottomContainerResumeTimeoutId);
  }
}



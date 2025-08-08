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
    { url: 'assets/resort/yinranch_gallery-1.jpg', caption: 'The bathhouse at sunset, where the water runs directly into the garden.' },
    { url: 'assets/resort/yinranch_gallery-2.jpg', caption: 'The bathhouse at sunset, where the water runs directly into the garden.' },
    { url: 'assets/resort/yinranch_gallery-3.jpg', caption: 'The bathhouse at sunset, where the water runs directly into the garden.' },
    { url: 'assets/resort/yinranch_gallery-4.jpg', caption: 'We worship the Tomato. We even made one of our favorite candles inspired by its ripe, supple, bursting scent.' },
    { url: 'assets/resort/yinranch_gallery-5.jpg', caption: 'We worship the Tomato. We even made one of our favorite candles inspired by its ripe, supple, bursting scent.' },
    { url: 'assets/resort/yinranch_gallery-6.jpg', caption: 'We worship the Tomato. We even made one of our favorite candles inspired by its ripe, supple, bursting scent.' },
    { url: 'assets/resort/yinranch_gallery-7.jpg', caption: 'We worship the Tomato. We even made one of our favorite candles inspired by its ripe, supple, bursting scent.' },
    { url: 'assets/resort/yinranch_gallery-8.jpg', caption: 'We worship the Tomato. We even made one of our favorite candles inspired by its ripe, supple, bursting scent.' },
    { url: 'assets/resort/yinranch_gallery-9.jpg', caption: 'We worship the Tomato. We even made one of our favorite candles inspired by its ripe, supple, bursting scent.' },
  ];

  ngAfterViewInit(): void {
    this.startAutoScroll();
  }

  bottomImages = [
    'assets/resort/yinranch_gallery-3.jpg',
    'assets/resort/yinranch_gallery-6.jpg',
    'assets/resort/yinranch_gallery-1.jpg',
    'assets/resort/yinranch_gallery-3.jpg',
    'assets/resort/image67.jpg',
    'assets/resort/yinranch_gallery-3.jpg',
    'assets/resort/yinranch_gallery-6.jpg',
    'assets/resort/yinranch_gallery-1.jpg',
    'assets/resort/yinranch_gallery-3.jpg',
    'assets/resort/image67.jpg'
  ];

  autoScrollIntervalId: any;
  autoScrollStep = 2;
  autoScrollDelay = 20;

  userInteracting = false;
  resumeTimeoutId: any;

  startAutoScroll(): void {
    this.clearAutoScroll();
    this.autoScrollIntervalId = setInterval(() => {
      if (!this.userInteracting) {
        this.autoScrollStepForward();
      }
    }, this.autoScrollDelay);
  }

  clearAutoScroll(): void {
    if (this.autoScrollIntervalId) clearInterval(this.autoScrollIntervalId);
  }

  autoScrollStepForward(): void {
    const container = this.scrollWrapper.nativeElement;
    container.scrollLeft += this.autoScrollStep;

    const maxScrollLeft = container.scrollWidth / 2;
    if (container.scrollLeft >= maxScrollLeft) {
      container.scrollLeft = container.scrollLeft - maxScrollLeft;
    }

    const bottomcontainer = this.scrollContainer.nativeElement;
    bottomcontainer.scrollLeft += this.autoScrollStep;

    const maxBottomScrollLeft = bottomcontainer.scrollWidth / 2;
    if (bottomcontainer.scrollLeft >= maxBottomScrollLeft) {
      bottomcontainer.scrollLeft = bottomcontainer.scrollLeft - maxBottomScrollLeft;
    }
  }

  scrollNext(): void {
    this.userInteracting = true;
    this.scrollByAmount(300);
    this.setResumeAutoScrollTimer();
  }

  scrollPrev(): void {
    this.userInteracting = true;
    this.scrollByAmount(-300);
    this.setResumeAutoScrollTimer();
  }

  scrollByAmount(amount: number): void {
    this.scrollWrapper.nativeElement.scrollBy({ left: amount, behavior: 'smooth' });
    this.scrollContainer.nativeElement.scrollBy({ left: amount, behavior: 'smooth' });
  }

  pauseAutoScroll(): void {
    this.userInteracting = true;
    this.clearAutoScroll();
  }

  resumeAutoScroll(): void {
    this.userInteracting = false;
    this.startAutoScroll();
  }

  setResumeAutoScrollTimer(): void {
    clearTimeout(this.resumeTimeoutId);
    this.resumeTimeoutId = setTimeout(() => {
      this.userInteracting = false;
    }, 3000);
  }

  ngOnDestroy(): void {
    this.clearAutoScroll();
    clearTimeout(this.resumeTimeoutId);
  }
}



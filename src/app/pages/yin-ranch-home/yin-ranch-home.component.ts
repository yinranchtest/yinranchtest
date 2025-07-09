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
  @ViewChild('scrollContainer', { static: true }) scrollContainer!: ElementRef<HTMLDivElement>;

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

  private scrollSpeed = 0.5;
  private animationFrameId: number | null = null;
  private isPaused = false;

  ngAfterViewInit(): void {
    this.startScroll();
  }

  startScroll(): void {
    const container = this.scrollContainer.nativeElement;

    const scroll = () => {
      if (!this.isPaused) {
        container.scrollLeft += this.scrollSpeed;

        // Reset scrollLeft when halfway through duplicated content
        const maxScroll = container.scrollWidth / 2;
        if (container.scrollLeft >= maxScroll) {
          container.scrollLeft = 0;
        }
      }

      this.animationFrameId = requestAnimationFrame(scroll);
    };

    scroll();
  }

  pauseScroll(): void {
    this.isPaused = true;
  }

  resumeScroll(): void {
    this.isPaused = false;
  }

  ngOnDestroy(): void {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }
}

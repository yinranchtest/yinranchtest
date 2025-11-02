import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-yin-ranch-home',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './yin-ranch-home.component.html',
  styleUrl: './yin-ranch-home.component.scss'
})
export class YinRanchHomeComponent implements OnInit, AfterViewInit, OnDestroy {
  private animationId: number | null = null;
  private isPaused = false;
  private topScrollPosition = 0;
  private bottomScrollPosition = 0;
  private topManualScrollActive = false;
  private bottomManualScrollActive = false;
  private wheelHandlers: Array<() => void> = [];
  private touchHandlers: Array<() => void> = [];
  topImages = [
    { url: 'assets/home/rotatingImage1/img1.jpg', caption: 'Creek Cottage: A place like home.' },
    { url: 'assets/home/rotatingImage1/img2.jpg', caption: 'Hit a hole in one on our 4 hole, mini-golf course.' },
    { url: 'assets/home/rotatingImage1/img3.jpg', caption: 'Our vineyard is anything but dry. Experience a mini wine country in Yin Ranch.' },
    { url: 'assets/home/rotatingImage1/img4.jpg', caption: 'Wishes do come true. A grand fountain greets you and your guests to Yin Ranch.' },
    { url: 'assets/home/rotatingImage1/img5.jpg', caption: 'Wave to your kids in the tunnels of the play place. ' },
    { url: 'assets/home/rotatingImage1/img6.jpg', caption: 'Meet your match on the court. Yin Ranch features full sized tennis, basketball, volleyball and soccer courts that turn guests into teams.' },
    { url: 'assets/home/rotatingImage1/img7.jpg', caption: 'Take in the moment. Tune into the tranquil nature that surrounds Yin Ranch.' },
    { url: 'assets/home/rotatingImage1/img8.jpg', caption: 'Behold, the pavilion. Our largest accommodating venue, ready to be yours.' },
    { url: 'assets/home/rotatingImage1/img9.jpg', caption: 'Wishes do come true. A grand fountain greets you and your guests to Yin Ranch.' },
    { url: 'assets/home/rotatingImage1/img10.jpg', caption: 'Make our creek house a home. Book a stay in our private lodging fit for families and large groups.'}
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
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initializeScrollTracks();
      this.startSeamlessScrolling();
      this.setupHoverEvents();
      this.setupWheelScrolling();
      this.setupTouchScrolling();
    }, 0);
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
    this.wheelHandlers.forEach(cleanup => cleanup());
    this.touchHandlers.forEach(cleanup => cleanup());
    this.wheelHandlers = [];
    this.touchHandlers = [];
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

  private getImageCardWidth(track: HTMLElement): number {
    const firstCard = track.querySelector('.image-card') as HTMLElement;
    if (firstCard) {
      const cardRect = firstCard.getBoundingClientRect();
      const computedStyle = window.getComputedStyle(firstCard);
      const marginLeft = parseFloat(computedStyle.marginLeft) || 0;
      const marginRight = parseFloat(computedStyle.marginRight) || 0;
      return cardRect.width + marginLeft + marginRight;
    }
    return 300;
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

  private setupWheelScrolling(): void {
    const scrollingWrappers = document.querySelectorAll('.scrolling-wrapper');
    scrollingWrappers.forEach((wrapper: Element, index: number) => {
      const handler = (event: Event) => {
        const wheelEvent = event as WheelEvent;
        
        const horizontalDelta = Math.abs(wheelEvent.deltaX);
        const verticalDelta = Math.abs(wheelEvent.deltaY);
        
        if (horizontalDelta > verticalDelta && horizontalDelta > 10) {
          wheelEvent.preventDefault();
          
          const scrollDelta = wheelEvent.deltaX;
          
          if (index === 0) {
            if (scrollDelta > 0) {
              this.scrollTopNext();
            } else {
              this.scrollTopPrev();
            }
          } else if (index === 1) {
            if (scrollDelta > 0) {
              this.scrollBottomNext();
            } else {
              this.scrollBottomPrev();
            }
          }
        }
      };
      
      wrapper.addEventListener('wheel', handler, { passive: false });
      
      this.wheelHandlers.push(() => {
        wrapper.removeEventListener('wheel', handler);
      });
    });
  }

  private setupTouchScrolling(): void {
    const scrollingWrappers = document.querySelectorAll('.scrolling-wrapper');
    scrollingWrappers.forEach((wrapper: Element, index: number) => {
      let touchStartX = 0;
      let touchStartY = 0;
      let touchEndX = 0;
      let touchEndY = 0;
      let touchStartTime = 0;
      let isHorizontalSwipe = false;

      const touchStartHandler = (event: Event) => {
        const touchEvent = event as TouchEvent;
        if (touchEvent.touches && touchEvent.touches.length > 0) {
          touchStartX = touchEvent.touches[0].clientX;
          touchStartY = touchEvent.touches[0].clientY;
          touchStartTime = Date.now();
          isHorizontalSwipe = false;
        }
      };

      const touchMoveHandler = (event: Event) => {
        const touchEvent = event as TouchEvent;
        if (touchEvent.touches && touchEvent.touches.length > 0) {
          const deltaX = Math.abs(touchEvent.touches[0].clientX - touchStartX);
          const deltaY = Math.abs(touchEvent.touches[0].clientY - touchStartY);
          
          if (deltaX > deltaY && deltaX > 10) {
            isHorizontalSwipe = true;
            event.preventDefault();
          }
        }
      };

      const touchEndHandler = (event: Event) => {
        const touchEvent = event as TouchEvent;
        if (touchEvent.changedTouches && touchEvent.changedTouches.length > 0) {
          touchEndX = touchEvent.changedTouches[0].clientX;
          touchEndY = touchEvent.changedTouches[0].clientY;
          const touchEndTime = Date.now();
          
          const swipeDistanceX = touchStartX - touchEndX;
          const swipeDistanceY = touchStartY - touchEndY;
          const swipeTime = touchEndTime - touchStartTime;
          
          const horizontalDistance = Math.abs(swipeDistanceX);
          const verticalDistance = Math.abs(swipeDistanceY);
          
          if (isHorizontalSwipe && horizontalDistance > verticalDistance && horizontalDistance > 50 && swipeTime < 300) {
            if (index === 0) {
              if (swipeDistanceX > 0) {
                this.scrollTopNext();
              } else {
                this.scrollTopPrev();
              }
            } else if (index === 1) {
              if (swipeDistanceX > 0) {
                this.scrollBottomNext();
              } else {
                this.scrollBottomPrev();
              }
            }
          }
        }
      };

      wrapper.addEventListener('touchstart', touchStartHandler, { passive: true });
      wrapper.addEventListener('touchmove', touchMoveHandler, { passive: false });
      wrapper.addEventListener('touchend', touchEndHandler, { passive: true });

      this.touchHandlers.push(() => {
        wrapper.removeEventListener('touchstart', touchStartHandler);
        wrapper.removeEventListener('touchmove', touchMoveHandler);
        wrapper.removeEventListener('touchend', touchEndHandler);
      });
    });
  }

  scrollTopNext(): void {
    const topTrack = document.querySelectorAll('.scroll-track')[0] as HTMLElement;
    if (topTrack) {
      this.topManualScrollActive = true;
      
      topTrack.classList.remove('auto-scroll');
      topTrack.classList.add('manual-scroll');
      
      const scrollAmount = this.getImageCardWidth(topTrack);
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
      }, 850);
    }
  }

  scrollTopPrev(): void {
    const topTrack = document.querySelectorAll('.scroll-track')[0] as HTMLElement;
    if (topTrack) {
      this.topManualScrollActive = true;
      
      topTrack.classList.remove('auto-scroll');
      topTrack.classList.add('manual-scroll');
      
      const scrollAmount = this.getImageCardWidth(topTrack);
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
      }, 850);
    }
  }

  scrollBottomNext(): void {
    const bottomTrack = document.querySelectorAll('.scroll-track')[1] as HTMLElement;
    if (bottomTrack) {
      this.bottomManualScrollActive = true;
      
      bottomTrack.classList.remove('auto-scroll');
      bottomTrack.classList.add('manual-scroll');
      
      const scrollAmount = this.getImageCardWidth(bottomTrack);
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
      }, 850);
    }
  }

  scrollBottomPrev(): void {
    const bottomTrack = document.querySelectorAll('.scroll-track')[1] as HTMLElement;
    if (bottomTrack) {
      this.bottomManualScrollActive = true;
      
      bottomTrack.classList.remove('auto-scroll');
      bottomTrack.classList.add('manual-scroll');
      
      const scrollAmount = this.getImageCardWidth(bottomTrack);
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
      }, 850);
    }
  }
}







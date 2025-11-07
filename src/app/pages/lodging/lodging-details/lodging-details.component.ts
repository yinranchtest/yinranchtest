import { CommonModule } from '@angular/common';
import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { LodgingService } from '../../../services/lodging/lodging.service';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-lodging-details',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './lodging-details.component.html',
  styleUrl: './lodging-details.component.scss'
})
export class LodgingDetailsComponent implements OnInit {

  contactLodging: boolean = false
  lodgingId: any
  lodgingDetails: any

  currentIndex = 1;
  transitionEnabled = true;
  windowWidth = window.innerWidth;

  expandedImage: string | null = null;
  private modalInstance: Modal | null = null;

  constructor(private _route: ActivatedRoute, private _lodgingService: LodgingService) {
    this._route.params.subscribe(
      (lodgingId: any) => {
        this.lodgingId = lodgingId.id
      }
    )
  }
  ngOnInit(): void {
    this.getLodgingDetailsById()
    this.updateWindowWidth()
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateWindowWidth();
  }

  updateWindowWidth() {
    this.windowWidth = window.innerWidth;
  }

  getCarouselTransform(): string {
    let itemWidth: number;
    let margin: number;
    
    if (this.windowWidth <= 480) {
      itemWidth = 90;
      margin = 5;
    } else if (this.windowWidth <= 768) {
      itemWidth = 85;
      margin = 7.5;
    } else {
      itemWidth = 80;
      margin = 10;
    }
    
    return `translateX(calc(-${this.currentIndex} * (${itemWidth}% + ${margin * 2}px) + ${(100 - itemWidth) / 2}%))`;
  }

  getLodgingDetailsById() {
    this._lodgingService.getLodgings().subscribe(
      (response: any) => {
        this.lodgingDetails = response.find((eachLodging: any) => eachLodging.id == this.lodgingId)
        console.log(this.lodgingDetails)
      }
    )
  }

  get loopedImages() {
    const images = this.lodgingDetails?.images ?? [];
    if (images.length === 0) return [];

    return [images[images.length - 1], ...images, images[0]];
  }

  next() {
    this.currentIndex++;
    if (this.currentIndex === this.loopedImages.length - 1) {
      setTimeout(() => {
        this.transitionEnabled = false;
        this.currentIndex = 1;
        setTimeout(() => this.transitionEnabled = true, 50);
      }, 600);
    }
  }

  prev() {
    this.currentIndex--;
    if (this.currentIndex === 0) {
      setTimeout(() => {
        this.transitionEnabled = false;
        this.currentIndex = this.loopedImages.length - 2;
        setTimeout(() => this.transitionEnabled = true, 50);
      }, 600);
    }
  }

  goToSlide(index: number) {
    console.log(index)
    this.currentIndex = index + 1;
  }

  get actualImages() {
    return this.lodgingDetails?.images ?? [];
  }

  get displayIndex() {
    const actualLength = this.actualImages.length;
    if (actualLength === 0) return 1;
    if (this.currentIndex < 0) {
      return actualLength;
    }
    if (this.currentIndex === 0) {
      return actualLength;
    }
    if (this.currentIndex >= 1 && this.currentIndex <= actualLength) {
      return this.currentIndex;
    }
    if (this.currentIndex > actualLength) {
      return 1;
    }

    return 1;
  }

  openImage(img: string) {
    this.expandedImage = img;

    const modalElement = document.getElementById('imageModal');
    if (modalElement) {
      this.modalInstance = new Modal(modalElement, {
        backdrop: 'static',
        keyboard: true,
      });
      this.modalInstance.show();
    }
  }

  closeImage() {
    this.expandedImage = null;
  }
}

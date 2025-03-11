import { Component } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { bootstrapApplication } from '@angular/platform-browser';
import { HeaderComponent } from './app/components/header/header.component';
import { AboutComponent } from './app/components/about/about.component';
import { ContactComponent } from './app/components/contact/contact.component';
import { GalleryComponent } from './app/components/gallery/gallery.component';
import { AmenitiesComponent } from './app/components/amenities/amenities.component';
import { AttractionsComponent } from './app/components/attractions/attractions.component';
import { BookComponent } from './app/components/book/book.component';
import { ReviewsComponent } from './app/components/reviews/reviews.component';
import { BannerComponent } from './app/components/banner/banner.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    GalleryComponent,
    AmenitiesComponent,
    AttractionsComponent,
    BookComponent,
    ReviewsComponent,
    BannerComponent
  ],
  template: `
    <app-header class="mb-4"></app-header>
    <app-banner></app-banner>
    <app-about></app-about>
    <app-gallery></app-gallery>
    <app-amenities></app-amenities>
    <app-book></app-book>
    <app-attractions></app-attractions>
    <app-reviews></app-reviews>
    <app-contact></app-contact>
  `
})
export class App { }

bootstrapApplication(App);
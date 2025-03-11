import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="fixed w-full z-50 bg-white/90 shadow-md">
      <nav class="container mx-auto px-4 py-2 flex justify-between items-center">
        <div class="text-2xl font-bold text-[#2C5530]">Yin Ranch</div>
        <ul class="flex space-x-6">
          <li><a href="#about" class="hover:text-[#2C5530] no-underline">About US</a></li>
          <li><a href="#book" class="hover:text-[#2C5530] no-underline">Book</a></li>
          <li><a href="#gallery" class="hover:text-[#2C5530] no-underline">Gallery</a></li>
          <li><a href="#amenities" class="hover:text-[#2C5530] no-underline">Amenities</a></li>
          <li><a href="#attractions" class="hover:text-[#2C5530] no-underline">Attractions</a></li>
          <li><a href="#reviews" class="hover:text-[#2C5530] no-underline">Reviews</a></li>
          <li><a href="#contact" class="hover:text-[#2C5530] no-underline">Contact</a></li>
        </ul>
      </nav>
    </header>
  `
})
export class HeaderComponent {}
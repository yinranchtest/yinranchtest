import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  template: `
    <section id="contact" class="section-padding bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-12 text-[#2C5530]">Contact Us</h2>
        <div class="max-w-2xl mx-auto">
          <form class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" name="name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2C5530] focus:ring focus:ring-[#2C5530] focus:ring-opacity-50">
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2C5530] focus:ring focus:ring-[#2C5530] focus:ring-opacity-50">
            </div>
            <div>
              <label for="dates" class="block text-sm font-medium text-gray-700">Preferred Dates</label>
              <input type="text" id="dates" name="dates" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2C5530] focus:ring focus:ring-[#2C5530] focus:ring-opacity-50">
            </div>
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" name="message" rows="4" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2C5530] focus:ring focus:ring-[#2C5530] focus:ring-opacity-50"></textarea>
            </div>
            <button type="submit" class="btn-primary w-full">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent {}
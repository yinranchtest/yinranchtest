import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weddings',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './weddings.component.html',
  styleUrl: './weddings.component.scss',
  animations: [
    trigger('slideToggle', [
      state('closed', style({
        height: '0',
        opacity: 0,
        padding: '0 1rem',
        overflow: 'hidden',
      })),
      state('open', style({
        height: '*',
        opacity: 1,
        padding: '1rem',
        overflow: 'hidden',
      })),
      transition('closed <=> open', animate('300ms ease-in-out')),
    ])
  ]
})
export class WeddingsComponent {
  activeSection: string | null = null;

  toggleSection(section: string) {
    this.activeSection = this.activeSection === section ? null : section;
  }

  isOpen(section: string): boolean {
    return this.activeSection === section;
  }
}

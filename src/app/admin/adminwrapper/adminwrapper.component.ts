import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-adminwrapper',
  standalone: true,
  imports: [
    SidebarComponent,
    RouterOutlet
  ],
  templateUrl: './adminwrapper.component.html',
  styleUrl: './adminwrapper.component.scss'
})
export class AdminwrapperComponent {

}

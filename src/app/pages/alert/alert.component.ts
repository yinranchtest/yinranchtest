import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../services/alert/alert.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss'
})
export class AlertComponent implements OnInit {

  public alert: any
  private alertSub!: Subscription;

  constructor(public alertService: AlertService) { }

  ngOnInit(): void {
    this.alertSub = this.alertService.alert$.subscribe(data => {
      this.alert = data;
    });
  }

  iconClass(type: string) {
    switch (type) {
      case 'success': return 'bi bi-check-circle-fill';
      case 'danger': return 'bi bi-x-circle-fill';
      case 'warning': return 'bi bi-exclamation-triangle-fill';
      case 'info': return 'bi bi-info-circle-fill';
      default: return '';
    }
  }

  ngOnDestroy(): void {
    if (this.alertSub) {
      this.alertSub.unsubscribe();
    }
  }

}

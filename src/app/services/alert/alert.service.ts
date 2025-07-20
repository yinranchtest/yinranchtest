import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  private alertSubject = new BehaviorSubject<{ message: string; type: string }  | null>(null);
  alert$ = this.alertSubject.asObservable();

  showAlert(message: string, type: any = 'success') {
    console.log(message)
    this.alertSubject.next({ message, type });
    setTimeout(() => this.clearAlert(), 5000);
  }

  clearAlert() {
    this.alertSubject.next(null);
  }
}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { ContactService } from '../../services/contact/contact.service';
import { AlertService } from '../../services/alert/alert.service';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleMapsModule,
    AlertComponent
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {

  submitted: boolean = false
  currentStep = 1;
  contactForm: FormGroup
  center: google.maps.LatLngLiteral = { lat: 38.363161117860884, lng: -122.02977666542918 };

  constructor(private fb: FormBuilder, private _contact: ContactService,
    private _alertService: AlertService
  ) {
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
      isOverNightLodging: [''],
      estimatedGuest: [''],
      eventName: [''],
      venuePackageType: [''],
      venueSearchingProcess: [''],
      message: [''],
      eventDay: ['']
    })
  }

  ngOnInit(): void {

  }

  onClickToChangeStep(step: number) {
    if (this.contactForm.valid) {
      this.currentStep = step;
    } else {
      this.submitted = true
    }
  }

  next() {
    if (this.contactForm.invalid) {
      this.submitted = true
    } else {
      this.currentStep = 2
    }
  }

  goToFinalStep(step: number) {
    this.currentStep = step
  }

  addContact() {
    let payload = {
      ...this.contactForm.value
    }
    this._contact.addContact(payload).subscribe(
      (response: any) => {
        this._alertService.showAlert(response.message, 'success');
        this.contactForm.reset()
        this.currentStep = 1
        this.submitted = false
      },
      ({ error }: any) => {
        this._alertService.showAlert(error.message, 'danger');
        this.submitted = false
      }
    )
  }
}

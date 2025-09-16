import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactService } from '../../services/contact/contact.service';

@Component({
  selector: 'app-enquiries',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './enquiries.component.html',
  styleUrl: './enquiries.component.scss'
})
export class EnquiriesComponent implements OnInit {
  enquiries: any;
  currentPage: number = 1;
  totalPages: number = 1;
  totalItems: number = 0;
  size: number = 20;

  constructor(private _service: ContactService) { }
  
  ngOnInit() {
    this.getAllEnquiries()
  }

  getAllEnquiries() {
    this._service.getAllContacts(this.currentPage, this.size).subscribe(
      (response: any) => {
        this.enquiries = response;
        this.currentPage = response.page;
        this.totalPages = response.totalPages;
        this.totalItems = response.total;
      },
      (error:any)=>{
        this.enquiries = []
      }
    )
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.getAllEnquiries();
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.getAllEnquiries();
    }
  }

  get isFirstPage(): boolean {
    return this.currentPage === 1;
  }

  get isLastPage(): boolean {
    return this.currentPage === this.totalPages;
  }
}

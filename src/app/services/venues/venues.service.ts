import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VenuesService {

  private venuesUrl = 'assets/venues.json';

  constructor(private http:HttpClient) { }

  getVenues(){
    return this.http.get(this.venuesUrl)
  }
}

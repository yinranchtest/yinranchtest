import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LodgingService {

  private lodgingsUrl = 'assets/lodging.json';

  constructor(private http: HttpClient) {}

  getLodgings() {
    return this.http.get(this.lodgingsUrl);
  }
 
}

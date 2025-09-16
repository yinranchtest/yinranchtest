import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private _http: HttpClient) { }
  addContact(payload: any) {
    let url = `${environment.host}/api/addContact`
    return this._http.post(url, payload)
  }
  sendMail(payload: any) {
    let url = `${environment.host}/api/sendMail`
    return this._http.post(url, payload)
  }
  getAllContacts(page:number, size:number) {
    let url = `${environment.host}/api/getAllcontacts?page=${page}&size=${size}`
    return this._http.get(url)
  }

}

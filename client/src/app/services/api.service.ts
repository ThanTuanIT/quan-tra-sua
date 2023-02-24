import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getItems() {
    return this.httpClient.get(`${environment.api_url}/item`);
  }

  getItemById(id: number) {
    return this.httpClient.get(`${environment.api_url}/item/${id}`)
  }
}

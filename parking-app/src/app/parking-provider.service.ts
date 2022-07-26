import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParkingProviderService {

  constructor(
    private httpClient: HttpClient,
    @Inject('API_URL') private url: string
  ) { console.log('Hello ParkingProvider Provider'); }

  getParkingList() {
    return new Promise((resolve, reject) => {
      this.httpClient.get(this.url + '/parking').subscribe(data => {
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  searchParkingList(query) {
    return new Promise((resolve, reject) => {
      this.httpClient.get(this.url + '/parking/search/' + query).subscribe(data => {
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  getParkingID(query) {
    return new Promise((resolve, reject) => {
      this.httpClient.get(this.url + '/parking/get/' + query).subscribe(data => {
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }
}

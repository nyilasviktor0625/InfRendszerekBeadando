import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DVD } from '../models/dvd';

@Injectable({
  providedIn: 'root'
})
export class DVDService {

  constructor(private http: HttpClient) { }

  async loadDVDs() {
    return this.http.get<DVD[]>('/api/dvds').toPromise();
  }

  async filterDVDs(search: string) {
    return this.http.get<DVD[]>('/api/dvds', {
      params: { search }
    }).toPromise();
  }

  async addDVD(dvd: DVD) {
    return this.http.post<DVD>('/api/dvds', dvd).toPromise();
  }

  async getDVDById(id: string) {
    return this.http.get<DVD>('/api/dvds/' + id).toPromise();
  }
  delete(id: number) {
    return this.http.delete('/api/dvds/' + id).toPromise();
  }
}

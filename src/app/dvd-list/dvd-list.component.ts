import { Component, Input, OnInit } from '@angular/core';
import { DVD } from '../models/dvd';
import { DVDService } from '../services/dvd.service';

@Component({
  selector: 'app-dvd-list',
  templateUrl: './dvd-list.component.html',
  styleUrls: ['./dvd-list.component.css']
})
export class DVDListComponent implements OnInit {

  dvds: DVD[] = [];

  searchQuery: string;

  constructor(private dvdService: DVDService) { }

  async ngOnInit() {
    this.dvds = await this.dvdService.loadDVDs();
  }

  async search() {
    this.dvds = await this.dvdService.filterDVDs(this.searchQuery);
  }
	async deleteDVD(id: number) {
    await this.dvdService.delete(id);
    this.dvds = await this.dvdService.loadDVDs();
  }
}

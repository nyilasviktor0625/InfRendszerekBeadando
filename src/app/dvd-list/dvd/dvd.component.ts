import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DVD } from 'src/app/models/dvd';
import { DVDService } from 'src/app/services/dvd.service';
@Component({
  selector: 'app-dvd',
  templateUrl: './dvd.component.html',
  styleUrls: ['./dvd.component.css']
})

export class DVDComponent implements OnInit {
	

  @Input()
  dvd!: DVD;
  dvds:DVD[];

  constructor(private router: Router,private dvdService: DVDService) { }
  

  ngOnInit(): void {
  }

  navigateToDVDForm(id) {
    this.router.navigate([ '/dvd-form' ], {
      queryParams: {
        id: id
      }
    });
  }
 async deleteDVD(id: number) {
    await this.dvdService.delete(id);
    this.dvds = await this.dvdService.loadDVDs();
  }

 


}

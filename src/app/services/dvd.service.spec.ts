import { TestBed } from '@angular/core/testing';

import { DVDService } from './dvd.service';

describe('DVDService', () => {
  let service: DVDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DVDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

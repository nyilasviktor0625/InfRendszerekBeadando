import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DVDFormComponent } from './dvd-form.component';

describe('DVDFormComponent', () => {
  let component: DVDFormComponent;
  let fixture: ComponentFixture<DVDFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DVDFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DVDFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

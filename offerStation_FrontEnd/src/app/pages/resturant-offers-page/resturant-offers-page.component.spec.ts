import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturantOffersPageComponent } from './resturant-offers-page.component';

describe('ResturantOffersPageComponent', () => {
  let component: ResturantOffersPageComponent;
  let fixture: ComponentFixture<ResturantOffersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResturantOffersPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResturantOffersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

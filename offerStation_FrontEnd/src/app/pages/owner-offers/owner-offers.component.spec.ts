import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerOffersComponent } from './owner-offers.component';

describe('OwnerOffersComponent', () => {
  let component: OwnerOffersComponent;
  let fixture: ComponentFixture<OwnerOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerOffersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnerOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

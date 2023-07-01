import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartOwnerComponent } from './cart-owner.component';

describe('CartOwnerComponent', () => {
  let component: CartOwnerComponent;
  let fixture: ComponentFixture<CartOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartOwnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnermodalComponent } from './ownermodal.component';

describe('OwnermodalComponent', () => {
  let component: OwnermodalComponent;
  let fixture: ComponentFixture<OwnermodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnermodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnermodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

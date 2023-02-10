import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvanComponent } from './avan.component';

describe('AvanComponent', () => {
  let component: AvanComponent;
  let fixture: ComponentFixture<AvanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcmComponent } from './ccm.component';

describe('CcmComponent', () => {
  let component: CcmComponent;
  let fixture: ComponentFixture<CcmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CcmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CcmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

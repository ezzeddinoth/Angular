import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanningTestComponent } from './scanning-test.component';

describe('ScanningTestComponent', () => {
  let component: ScanningTestComponent;
  let fixture: ComponentFixture<ScanningTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScanningTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanningTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

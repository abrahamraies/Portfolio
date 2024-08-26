import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdemyCertificatesComponent } from './udemy-certificates.component';

describe('UdemyCertificatesComponent', () => {
  let component: UdemyCertificatesComponent;
  let fixture: ComponentFixture<UdemyCertificatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UdemyCertificatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UdemyCertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

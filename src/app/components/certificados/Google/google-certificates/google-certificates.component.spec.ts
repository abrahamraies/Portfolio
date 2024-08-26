import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleCertificatesComponent } from './google-certificates.component';

describe('GoogleCertificatesComponent', () => {
  let component: GoogleCertificatesComponent;
  let fixture: ComponentFixture<GoogleCertificatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoogleCertificatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogleCertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

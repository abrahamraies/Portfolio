import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherCertificatesComponent } from './other-certificates.component';

describe('OtherCertificatesComponent', () => {
  let component: OtherCertificatesComponent;
  let fixture: ComponentFixture<OtherCertificatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtherCertificatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherCertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

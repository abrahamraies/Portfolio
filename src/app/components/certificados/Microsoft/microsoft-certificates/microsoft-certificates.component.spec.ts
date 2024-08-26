import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrosoftCertificatesComponent } from './microsoft-certificates.component';

describe('MicrosoftCertificatesComponent', () => {
  let component: MicrosoftCertificatesComponent;
  let fixture: ComponentFixture<MicrosoftCertificatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MicrosoftCertificatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MicrosoftCertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

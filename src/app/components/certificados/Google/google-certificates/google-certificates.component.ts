import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-google-certificates',
    imports: [],
    templateUrl: './google-certificates.component.html',
    styleUrl: './google-certificates.component.css'
})
export class GoogleCertificatesComponent {
  isSpanish = localStorage.getItem('lang') === 'es';


  constructor(private router: Router) { }

  goBackToSection(sectionId: string): void {

    this.router.navigate(['/']).then(() => {

      const section = document.querySelector(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-udemy-certificates',
    imports: [],
    templateUrl: './udemy-certificates.component.html',
    styleUrl: './udemy-certificates.component.css'
})
export class UdemyCertificatesComponent {
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

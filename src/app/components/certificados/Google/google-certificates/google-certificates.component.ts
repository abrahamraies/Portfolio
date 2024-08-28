import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-google-certificates',
  standalone: true,
  imports: [],
  templateUrl: './google-certificates.component.html',
  styleUrl: './google-certificates.component.css'
})
export class GoogleCertificatesComponent {

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

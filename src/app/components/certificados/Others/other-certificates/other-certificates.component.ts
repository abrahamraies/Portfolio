import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-other-certificates',
  standalone: true,
  imports: [],
  templateUrl: './other-certificates.component.html',
  styleUrl: './other-certificates.component.css'
})
export class OtherCertificatesComponent {

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

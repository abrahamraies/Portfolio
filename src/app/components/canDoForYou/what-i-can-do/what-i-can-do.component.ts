import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-what-i-can-do',
  templateUrl: './what-i-can-do.component.html',
  styleUrls: ['./what-i-can-do.component.css']
})
export class WhatICanDoComponent {
  constructor(private router: Router) { }

  language: string = localStorage.getItem('lang') || 'es';

  get isSpanish(): boolean {
    return this.language === 'es';
  }


  goToContact() {
    this.router.navigate(['/']).then(() => {
      setTimeout(() => {
        const contactSection = document.querySelector('#contact') as HTMLElement;
        if (contactSection) {
          const offset = -10;
          const y = contactSection.getBoundingClientRect().top + window.scrollY + offset;
          smoothScrollTo(y, 1000);
        }
      }, 300);
    });
  }
}

function smoothScrollTo(targetY: number, duration: number = 600) {
  const startY = window.pageYOffset;
  const diff = targetY - startY;
  let start: number | null = null;

  const step = (timestamp: number) => {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    const percent = Math.min(progress / duration, 1);
    window.scrollTo(0, startY + diff * percent);
    if (progress < duration) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
}

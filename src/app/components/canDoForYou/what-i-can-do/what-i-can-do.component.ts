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

  get t() {
    return this.language === 'es' ? this.translations.es : this.translations.en;
  }

  translations = {
    es: {
      title: '¿Querés un sitio moderno, rápido y profesional?',
      subtitle: 'Transformo tus ideas en soluciones digitales que atraen clientes y generan resultados.',
      servicesTitle: '¿Qué puedo hacer por vos?',
      services: [
        'Landing pages que convierten visitas en clientes.',
        'Sitios web responsive, optimizados para celulares.',
        'Integración con APIs, CRMs o pagos online.',
        'Paneles de administración personalizados.',
        'Optimización SEO y velocidad de carga.'
      ],
      results: 'Algunos resultados',
      projects: [
        {
          img: 'assets/img/proyects/insurance.png',
          title: '🚗 Cotizador de Seguros',
          desc: 'Permite a los usuarios cotizar y pagar online. Aumentó el alcance en un 20%.',
          link: 'https://tu-link-al-deploy.com',
        },
        {
          img: 'assets/img/proyects/recipes.png',
          title: '🍽️ App de Recetas',
          desc: 'Registro, favoritos, buscador. Hecha para que cualquier foodie la disfrute.',
          link: 'https://tu-link-al-deploy.com',
        }
      ],
      stepsTitle: '¿Cómo trabajo?',
      steps: [
        'Me contás tu idea.',
        'Te propongo una solución accesible.',
        'Desarrollo con tu feedback.',
        'Entrego un producto real y usable.'
      ],
      cta: '¿Listo para llevar tu idea al siguiente nivel?',
      ctaBtn: 'Contactame'
    },
    en: {
      title: 'Do you want a modern, fast and professional website?',
      subtitle: 'I turn your ideas into digital solutions that attract clients and generate results.',
      servicesTitle: '¿What I can do for you?',
      services: [
        'Landing pages that turn visitors into customers.',
        'Responsive websites, optimized for mobile.',
        'Integration with APIs, CRMs or payment platforms.',
        'Custom admin dashboards.',
        'SEO and performance optimization.'
      ],
      results: 'Some results',
      projects: [
        {
          img: 'assets/img/proyects/insurance.png',
          title: '🚗 Insurance Quoting Tool',
          desc: 'Let users quote and pay online. Increased client reach by 20%.',
          link: 'https://tu-link-al-deploy.com',
        },
        {
          img: 'assets/img/proyects/recipes.png',
          title: '🍽️ Recipes App',
          desc: 'Register, save favorites, search. Designed for every foodie to enjoy.',
          link: 'https://tu-link-al-deploy.com',
        }
      ],
      stepsTitle: 'How do I work?',
      steps: [
        'You tell me your idea.',
        'I propose a practical solution.',
        'I develop it with your feedback.',
        'You get a usable, real product.'
      ],
      cta: 'Ready to take your idea to the next level?',
      ctaBtn: 'Contact me'
    }
  };

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
    if (progress < duration) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
}

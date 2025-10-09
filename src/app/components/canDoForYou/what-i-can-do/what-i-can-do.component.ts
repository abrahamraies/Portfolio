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
      subtitle: 'Transformo tus ideas en soluciones digitales que atraen clientes y generan resultados. ¡Hablemos de cómo puedo ayudarte!',
      servicesTitle: '¿Qué puedo hacer por vos?',
      services: [
        'Landing pages que convierten visitas en clientes.',
        'Sitios web responsive, optimizados para celulares.',
        'Integración con APIs, CRMs o pagos online.',
        'Paneles de administración personalizados.',
        'Optimización SEO y velocidad de carga.'
      ],
      results: 'Algunos resultados increíbles',
      projects: [
        {
          img: 'assets/img/proyects/rentalsVenado.png',
          title: '🚗 Cotizador de Vehiculos',
          desc: 'Una herramienta intuitiva que permite a los usuarios cotizar seguros de vehículos en línea y realizar pagos seguros. Este proyecto optimizó el proceso de adquisición de clientes, aumentando el alcance en un 20% mediante integraciones con APIs de pagos y un diseño responsive.',
          link: 'https://rentals-venado.web.app/',
        },
        {
          img: 'assets/img/proyects/recipeApp.png',
          title: '🍽️ App de Recetas',
          desc: 'Una aplicación web para amantes de la cocina con funciones de registro de usuarios, guardado de favoritos y buscador avanzado. Diseñada con un enfoque en la usabilidad, facilita el descubrimiento de recetas y mejora la experiencia del usuario foodie con un interfaz moderno y rápido.',
          link: 'https://recipes-app01.netlify.app/',
        },
        {
          img: 'assets/img/proyects/professional-carpenter.png',
          title: '🛠️ Sitio para Carpintero Profesional',
          desc: 'Un portafolio digital con galería de trabajos personalizados, formulario de contacto y secciones de servicios detallados. Este sitio impulsó las consultas en un 30% al destacar proyectos reales y testimonios de clientes, optimizado para SEO local y dispositivos móviles.',
          link: 'https://abrahamraies.github.io/professional-carpenter/',
        },
        {
          img: 'assets/img/proyects/professional-electrician.png',
          title: '⚡ Sitio para Electricista Profesional',
          desc: 'Sitio web con énfasis en servicios destacados, testimonios de clientes y sistema de agenda en línea. Mejora la visibilidad local mediante mapas interactivos y contenido optimizado, generando mayor confianza y un aumento en las reservas de servicios.',
          link: 'https://abrahamraies.github.io/professional-electrician/',
        },
        {
          img: 'assets/img/proyects/professional-landscaper.png',
          title: '🌳 Sitio para Paisajista Profesional',
          desc: 'Sitio con portafolio de diseños de jardines, calculadora de presupuestos y blog de consejos. Atrae clientes al mostrar transformaciones impresionantes, con integración de mapas y formularios, resultando en un incremento del 45% en leads cualificados.',
          link: 'https://abrahamraies.github.io/professional-landscapers/',
        },
        {
          img: 'assets/img/proyects/professional-roofer.png',
          title: '🏠 Sitio para Techador Profesional',
          desc: 'Sitio con comparaciones antes/después de proyectos, calculadora de costos en línea y galería de trabajos. Atrae clientes residenciales al resaltar calidad y durabilidad, con SEO enfocado en servicios locales y un diseño limpio que fomenta conversiones.',
          link: 'https://abrahamraies.github.io/elite-roofing/',
        },
        {
          img: 'assets/img/proyects/professional-painter.png',
          title: '🎨 Sitio para Pintor Profesional',
          desc: 'Portafolio con galería de proyectos de pintura, opciones de personalización de colores y formulario de cotización. Aumentó las ventas en un 40% mediante un diseño visual atractivo, testimonios y integración con herramientas de scheduling para citas rápidas.',
          link: 'https://abrahamraies.github.io/professional-painter/',
        },
        {
          img: 'assets/img/proyects/professional-aircon.png',
          title: '❄️ Sitio para Técnico de Aires Acondicionados Profesional',
          desc: 'Plataforma con servicios de instalación, reparación y mantenimiento, incluyendo diagnósticos en línea y agenda. Genera confianza con guías educativas y testimonios, aumentando las consultas en un 35% gracias a su diseño responsive y fácil navegación.',
          link: 'https://abrahamraies.github.io/professional-aircon/',
        },
        {
          img: 'assets/img/proyects/professional-cleanner.png',
          title: '🪟 Sitio para Limpiador de Ventanas',
          desc: 'Sitio web especializado en servicios de limpieza de ventanas, con paquetes personalizados, testimonios y reserva en línea. Mejora la adquisición de clientes con un enfoque en resultados cristalinos y sostenibilidad, optimizado para móviles y SEO local.',
          link: 'https://abrahamraies.github.io/windows-cleanner/',
        },
      ],
      stepsTitle: '¿Cómo trabajo? Paso a paso, con vos',
      steps: [
        'Me contás tu idea y objetivos.',
        'Te propongo una solución accesible y personalizada.',
        'Desarrollo con tu feedback constante.',
        'Entrego un producto real, usable y listo para crecer.'
      ],
      cta: '¿Listo para llevar tu idea al siguiente nivel? ¡No esperes más!',
      ctaBtn: 'Contactame Ahora'
    },
    en: {
      title: 'Do you want a modern, fast and professional website?',
      subtitle: 'I turn your ideas into digital solutions that attract clients and generate results. Let\'s talk about how I can help you!',
      servicesTitle: 'What I can do for you?',
      services: [
        'Landing pages that turn visitors into customers.',
        'Responsive websites, optimized for mobile.',
        'Integration with APIs, CRMs or payment platforms.',
        'Custom admin dashboards.',
        'SEO and performance optimization.'
      ],
      results: 'Some amazing results',
      projects: [
        {
          img: 'assets/img/proyects/rentalsVenado.png',
          title: '🚗 Vehicle Quote',
          desc: 'An intuitive tool that allows users to quote vehicle online and make secure payments. This project optimized client acquisition, increasing reach by 20% through payment API integrations and responsive design.',
          link: 'https://rentals-venado.web.app/login',
        },
        {
          img: 'assets/img/proyects/recipeApp.png',
          title: '🍽️ Recipes App',
          desc: 'A web app for food lovers with user registration, favorites saving, and advanced search. Designed with usability in mind, it facilitates recipe discovery and enhances the foodie user experience with a modern, fast interface.',
          link: 'https://recipes-app01.netlify.app/',
        },
        {
          img: 'assets/img/proyects/professional-carpenter.png',
          title: '🛠️ Professional Carpenter Site',
          desc: 'A digital portfolio with custom work gallery, contact form, and detailed services sections. This site boosted inquiries by 30% by highlighting real projects and client testimonials, optimized for local SEO and mobile devices.',
          link: 'https://abrahamraies.github.io/professional-carpenter/',
        },
        {
          img: 'assets/img/proyects/professional-electrician.png',
          title: '⚡ Professional Electrician Site',
          desc: 'Website emphasizing featured services, client testimonials, and online scheduling system. Improves local visibility through interactive maps and optimized content, generating greater trust and an increase in service bookings.',
          link: 'https://abrahamraies.github.io/professional-electrician/',
        },
        {
          img: 'assets/img/proyects/professional-landscaper.png',
          title: '🌳 Professional Landscaper Site',
          desc: 'Site with garden design portfolio, budget calculator, and tips blog. Attracts clients by showcasing impressive transformations, with map integrations and forms, resulting in a 45% increase in qualified leads.',
          link: 'https://abrahamraies.github.io/professional-landscapers/',
        },
        {
          img: 'assets/img/proyects/professional-roofer.png',
          title: '🏠 Professional Roofer Site',
          desc: 'Site with before/after project comparisons, online cost calculator, and work gallery. Attracts residential clients by highlighting quality and durability, with SEO focused on local services and a clean design that encourages conversions.',
          link: 'https://abrahamraies.github.io/elite-roofing/',
        },
        {
          img: 'assets/img/proyects/professional-painter.png',
          title: '🎨 Professional Painter Site',
          desc: 'Portfolio with painting projects gallery, color customization options, and quote form. Increased sales by 40% through visually appealing design, testimonials, and scheduling tool integrations for quick appointments.',
          link: 'https://abrahamraies.github.io/professional-painter/',
        },
        {
          img: 'assets/img/proyects/professional-aircon.png',
          title: '❄️ Professional Air Conditioning Technician Site',
          desc: 'Platform with installation, repair, and maintenance services, including online diagnostics and scheduling. Builds trust with educational guides and testimonials, increasing inquiries by 35% thanks to its responsive design and easy navigation.',
          link: 'https://abrahamraies.github.io/professional-aircon/',
        },
        {
          img: 'assets/img/proyects/professional-cleanner.png',
          title: '🪟 Window Cleaner Site',
          desc: 'Website specialized in window cleaning services, with custom packages, testimonials, and online booking. Improves client acquisition with a focus on crystal-clear results and sustainability, optimized for mobile and local SEO.',
          link: 'https://abrahamraies.github.io/windows-cleanner/',
        },
      ],
      stepsTitle: 'How do I work? Step by step, with you',
      steps: [
        'You tell me your idea and goals.',
        'I propose a practical and customized solution.',
        'I develop it with your constant feedback.',
        'You get a usable, real product ready to grow.'
      ],
      cta: 'Ready to take your idea to the next level? Don\'t wait!',
      ctaBtn: 'Contact Me Now'
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

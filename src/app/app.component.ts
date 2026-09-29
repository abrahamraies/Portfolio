import { Component, HostListener, OnInit } from '@angular/core';
import { LanguageService } from './services/language.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  currentLanguage!: string;
  title = 'Portfolio';
  elem1 = false;
  elem2 = false;
  elem3 = false;
  elem4 = false;
  elem5 = false;
  elem6 = false;

  constructor(private languageService: LanguageService,private router: Router, private route: ActivatedRoute){
    this.router.events.subscribe((event) => {
      this.currentRoute = this.router.url;
      if (event instanceof NavigationEnd) {
        setTimeout(() => this.updateActiveSection());
      }
    });
  }
  currentRoute: string = '';
  excludedRoutes: string[] = [
    '/certificates',
    '/certificates/others',
    '/certificates/udemy',
    '/certificates/google',
    '/certificados'
  ];

  isRouteExcluded(): boolean {
    return this.excludedRoutes.includes(this.currentRoute);
  }

  private readonly sectionIds = ['home', 'about', 'skills', 'resume', 'proyect', 'contact'];

  selected(text: string): void {
    const index = this.sectionIds.indexOf(text);
    this.elem1 = index === 0;
    this.elem2 = index === 1;
    this.elem3 = index === 2;
    this.elem4 = index === 3;
    this.elem5 = index === 4;
    this.elem6 = index === 5;
  }

  @HostListener('window:scroll')
  updateActiveSection(): void {
    const marker = window.innerHeight * 0.4;
    let current = '';
    for (const id of this.sectionIds) {
      const section = document.getElementById(id);
      if (section && section.getBoundingClientRect().top <= marker) {
        current = id;
      }
    }
    this.selected(current);
  }

  ngOnInit(): void {
    this.languageService.currentLanguage$.subscribe((language) => {
      this.currentLanguage = language;
    });
  }

  scrollToTop() {
    const scrollStep = -window.scrollY / (1000 / 15);
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  }
}

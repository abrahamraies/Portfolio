import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    standalone: false
})
export class HomeComponent implements OnInit {
  currentLanguage!: string;
  typedStrings: string[] = [];
  introLabel: string = '';
  roleLabel: string = '';
  contactLabel: string = '';
  cvLabel: string = '';
  projectsLabel: string = '';
  readonly cvUrl =
    'https://firebasestorage.googleapis.com/v0/b/frontend-portfolio-b48a3.appspot.com/o/CV%20Abraham%20Raies%20-%20Software%20Developer.pdf?alt=media&token=3e0672e6-5ee8-4f34-8db9-d1989950b330';

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageService.currentLanguage$.subscribe((language) => {
      this.currentLanguage = language;

      if (language === 'es') {
        this.roleLabel = 'Desarrollador de software en Venado Tuerto, Santa Fe, Argentina';
        this.introLabel = 'Construyo ';
        this.typedStrings = [
          'sistemas backend en .NET',
          'agentes de IA con Claude y MCP',
          'aplicaciones web con React y Next.js',
        ];
        this.contactLabel = 'Escribime';
        this.cvLabel = 'Descargar CV';
        this.projectsLabel = 'Ver proyectos';
      } else {
        this.roleLabel = 'Software developer based in Venado Tuerto, Santa Fe, Argentina';
        this.introLabel = 'I build ';
        this.typedStrings = [
          'backend systems in .NET',
          'AI agents with Claude and MCP',
          'web apps with React and Next.js',
        ];
        this.contactLabel = 'Contact me';
        this.cvLabel = 'Download CV';
        this.projectsLabel = 'See projects';
      }
    });
  }
}

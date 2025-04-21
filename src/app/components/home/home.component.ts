import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentLanguage!: string;
  typedStrings: string[] = [];
  introLabel: string = '';

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageService.currentLanguage$.subscribe((language) => {
      this.currentLanguage = language;

      if (language === 'es') {
        this.introLabel = 'Soy ';
        this.typedStrings = ['Desarrollador Backend .NET', 'Freelancer', 'Desarrollador de Software'];
      } else {
        this.introLabel = 'I am ';
        this.typedStrings = ['.NET Backend Developer', 'Freelancer', 'Software Developer'];
      }
    });
  }
}

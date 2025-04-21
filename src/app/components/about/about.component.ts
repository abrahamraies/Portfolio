import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { aboutMeTexts } from 'src/app/json-texts/about-me';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  currentLanguage!: 'es' | 'en';
  languageToggleLabel: string = 'Spanish';
  whatICanDoForYou!: string;
  aboutMeIntro!: string;
  aboutMeDescription!: string;
  aboutMeDetails!: string;

  constructor(private languageService: LanguageService, private router: Router) { }

  goToProjects() {
    this.router.navigate(['/what-i-do']).then(() => {
      window.scrollTo(0, 0);
    });
  }

  ngOnInit(): void {
    this.languageService.currentLanguage$.subscribe((language) => {
      this.currentLanguage = language as 'es' | 'en';
      this.setAboutMeText();
    });
  }

  setAboutMeText() {
      const langTexts = aboutMeTexts[this.currentLanguage];
      this.whatICanDoForYou = langTexts.whatICanDoForYou;
      this.aboutMeIntro = langTexts.intro;
      this.aboutMeDescription = langTexts.description;
      this.aboutMeDetails = langTexts.details;
  }

  changeLanguage() {
    if (this.currentLanguage !== 'en') {
      this.languageService.setLanguage('en');
    } else {
      this.languageService.setLanguage('es');
    }
  }

}

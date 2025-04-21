import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import resume  from 'src/app/json-texts/resume.json';
import { ResumeContent } from 'src/app/interfaces/resume.interfaces';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  currentLanguage: 'es' | 'en' = 'es';
  resumeContent: ResumeContent = resume;

  constructor(private languageService: LanguageService) { }

  ngOnInit(): void {
    this.languageService.currentLanguage$.subscribe((language) => {
      this.currentLanguage = language as 'es' | 'en';
    });
  }

  get content() {
    return this.resumeContent[this.currentLanguage];
  }

  getCourseLink(category: string): string {
    const links: any = {
      Google: '/certificates/google',
      Udemy: '/certificates/udemy',
      AI: '/certificates/others',
    };
    return links[category] || '';
  }

  isInternalLink(category: string): boolean {
    return category !== 'Microsoft';
  }

  getExternalLink(category: string): string {
    if (category === 'Microsoft') {
      return 'https://learn.microsoft.com/en-us/users/abrahamraies-4425/achievements?tab=tab-learning-paths';
    }
    return '';
  }

}

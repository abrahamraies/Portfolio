import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.css'],
    standalone: false
})
export class SkillsComponent implements OnInit {
  currentLanguage!: string;

  constructor(private languageService: LanguageService) { }

  ngOnInit(): void {
    this.languageService.currentLanguage$.subscribe((language) => {
      this.currentLanguage = language;
    });
  }

}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private currentLanguageSubject = new BehaviorSubject<string>('en');
  currentLanguage$ = this.currentLanguageSubject.asObservable();

  constructor() {
    const savedLang = localStorage.getItem('lang');
    if (savedLang) {
      this.currentLanguageSubject.next(savedLang);
    }
  }


  setLanguage(language: string) {
    localStorage.setItem('lang', language);
    this.currentLanguageSubject.next(language);
  }
}
